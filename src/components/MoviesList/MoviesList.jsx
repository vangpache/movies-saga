import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TableCell, TableRow } from '@material-ui/core';



class MoviesList extends Component {


    render () {




        return (

            <>
                {this.props.reduxStore.movies.map(movie => {
                    return (
                        <TableRow key={movie.id}>
                            <TableCell>{movie.title}</TableCell>
                            <TableCell><img src={movie.poster} alt={movie.title} /></TableCell>
                        </TableRow>
                    )
                })}
            </>
            
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect(mapStateToProps) (MoviesList);