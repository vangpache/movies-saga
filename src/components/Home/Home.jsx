import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList/MoviesList';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import './Home.css'



class Home extends Component {

    //on load render all movies in data base onto home view
    //dispatch to saga to get movies
    componentDidMount () {
        console.log('Home Loaded');
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }



    render () {

        return (
            <div>
                <div>
                    <Typography variant="h2" color="secondary" >Movie Collection</Typography>
                 

                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Movie Title</TableCell>
                                <TableCell>Movie Poster</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <MoviesList />
                        </TableBody>
                    </Table>

                    {/* {JSON.stringify(this.props.reduxStore.movies)} */}

                </div>
                
            </div>

        )
    }
}




export default connect() (Home);