import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';



class MoviesList extends Component {


    render () {




        return (

            <div>
                {this.props.reduxStore.movies.map(movie => {
                    return (
                        <tr>
                            <td>{movie.title}</td>
                            <td><img src={movie.poster} /></td>
                        </tr>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect(mapStateToProps) (MoviesList);