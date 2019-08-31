import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import './Details.css';




class Details extends Component  {


    ////NEED TO ADD GENRE IN GET: SQL JOINS (SERVER SIDE)

    render () {


        return (

            <div>
                {this.props.reduxStore.movieToGet.map(info => {
                    return (
                        <div className="detailsDiv">
                            <h1>{info.title}</h1> <br/>
                            <img src={info.poster} alt={info.title}/><br/>
                            <p>{info.description}</p><br/>
                            <Button variant="outlined" color="primary">Back to List</Button>
                            <Button variant="outlined" color="secondary">Edit Details</Button>
                        </div>
                    )
                })}

                {/* {JSON.stringify(this.props.reduxStore.movieToGet)} */}
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