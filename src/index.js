import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
//IMPORT AXIOS
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('GET_MOVIES', getMovies)
    yield takeEvery ('GET_MOVIE_DETAILS', getDetails)
}

//SAGA TO GET MOVIE DETAILS USING PAYLOAD OF 'ID'
function* getDetails (action) {
    try {
        let response = yield axios.get(`/movies/${action.payload}`)
        console.log('in getDetails saga:', response);
        //DISPATCH TO A DETAILS REDUCER
        yield put ({
            type: 'MOVIE_TO_POST',
            payload: response.data
        })
    } catch (error) {
        console.log('in getDetails error:', error);
    }
}


//SAGA TO GET MOVIES FROM DB
function* getMovies (action) {
    try {
        let response = yield axios.get('/movies')
        console.log('in getMovies saga:', response.data);
        //DISPATCH TO A REDUCER
        yield put ({
            type: 'SET_MOVIES',
            payload: response.data
        })

    } catch (error) {
        console.log('in getMovies saga error:', error);
        
    }
}





// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//MOVIES REDUCER
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log('IN SET MOVIES:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

//REDUCER TO STORE DETAILS OF MOVIE POSTER CLICKED
const movieToPost = (state = [], action) => {
    switch(action.type) {
        case 'MOVIE_TO_POST' :
            console.log('IN MOVIE TO POST:', action.payload);
            return action.payload;
        default:
            return state;
    }
}


//GENRES REDUCER
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieToPost,
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
