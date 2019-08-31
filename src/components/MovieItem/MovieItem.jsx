import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableCell } from '@material-ui/core';



class MovieItem extends Component {

    //ON CLICK OF POSTER ROUTE TO DETAILS PAGE DISPLAY OF MOVIE INFORMATION
    //SEND ID
    handleClick = (id) => {
        console.log('movie poster clicked', id);
        //DISPATCH TO SAGA AND GET MOVIE DETAILS OF ID
        this.props.dispatch({
            type: 'GET_MOVIE_DETAILS',
            payload: id
        })
        //PUSH HISTORY TO DETAILS LINK(DISPLAYS DETAILS ABOUT MOVIE OF POSTER CLICKED)
        // this.props.history.push('/details')
    }

    render () {



        return (
        
            <>
                <TableCell>{this.props.title}</TableCell>
                <TableCell onClick={() => this.handleClick (this.props.id)}>
                    <img src={this.props.poster} alt={this.props.alt} />
                </TableCell>
            </>
        )
    }
}





export default connect() (MovieItem);