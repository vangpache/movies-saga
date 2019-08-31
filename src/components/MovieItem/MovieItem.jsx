import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableCell } from '@material-ui/core';



class MovieItem extends Component {



    render () {



        return (
        
            <>
                <TableCell>{this.props.title}</TableCell>
                <TableCell><img src={this.props.poster} alt={this.props.alt} /></TableCell>
            </>


        )
    }
}





export default connect() (MovieItem);