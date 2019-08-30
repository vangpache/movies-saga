import React, { Component } from 'react';
import { connect } from 'react-redux';



class Home extends Component {

    //on load render all movies in data base onto home view
    //dispatch to saga to get movies

    componentDidMount () {
        console.log('Home Loaded');
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }


    //



    render () {

        return (
            <div>
                <div>
                    <h2>List of Movies Here</h2>
                </div>

                <div>

                </div>
                
            </div>

        )
    }
}





export default connect() (Home);