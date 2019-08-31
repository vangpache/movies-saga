import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { TableCell, TableRow } from '@material-ui/core';



class MoviesList extends Component {


    render () {




        return (

            <>
                {this.props.reduxStore.movies.map(movie => {
                    return (
                        <TableRow key={movie.id}>
                            <MovieItem key={movie.id} title={movie.title} alt={movie.title} poster={movie.poster} />
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