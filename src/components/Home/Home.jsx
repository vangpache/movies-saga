import React, { Component } from 'react';
import { connect } from 'react-redux';
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


    //



    render () {

        return (
            <div>
                <div>
                    <h2>Movie Collection</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Movie Title</th>
                                <th>Movie Poster</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxStore.movies.map(movie => {
                                return (
                                  <tr>
                                      <td>{movie.title}</td>
                                      <td><img src={movie.poster} /></td>
                                  </tr>
                                )
                            })}

                        </tbody>
                    </table>

                    {/* {JSON.stringify(this.props.reduxStore.movies)} */}
                </div>

                <div>

                </div>
                
            </div>

        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}



export default connect(mapStateToProps) (Home);