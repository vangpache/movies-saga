import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

import './Details.css';




class Details extends Component  {


    ////NEED TO ADD GENRE IN GET: SQL JOINS (SERVER SIDE)


    handleBack = () => {
        this.props.history.push('/')
    }

    handleEdit = () => {
        this.props.history.push('/edit')
    }

    render () {

        let genres = this.props.reduxStore.genres.map(name => {
            return (
                <h4 key={name.id}>{name.name}</h4>
            )
        })


        return (

            <div>

                <div key={this.props.reduxStore.movieToGet.id} className="detailsDiv">
                    <h1>{this.props.reduxStore.movieToGet.title}</h1> <br />
                    <img src={this.props.reduxStore.movieToGet.poster} alt={this.props.reduxStore.movieToGet.title} /><br />
                    Genres: {genres}
                    <p>{this.props.reduxStore.movieToGet.description}</p><br />
                </div>


                <Button variant="contained" color="secondary" onClick={this.handleBack}>Back to List</Button>
                <Button variant="contained" color="secondary" onClick={this.handleEdit}>Edit Details</Button>
                <br/>
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