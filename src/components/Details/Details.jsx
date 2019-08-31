import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Details.css';




class Details extends Component  {


    render () {


        return (

            <div>
                {this.props.reduxStore.movieToGet.map(info => {
                    return (
                        <div className="detailsDiv">
                            <h1>{info.title}</h1> <br/>
                            <img src={info.poster} alt={info.title}/><br/>
                            <p>{info.description}</p>
                        </div>
                    )
                })}

                {JSON.stringify(this.props.reduxStore.movieToGet)}
            </div>
        )
    }
}



const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}


export default connect (mapStateToProps) (Details);