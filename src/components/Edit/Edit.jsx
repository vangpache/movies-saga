import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Edit extends Component {

    state = {
        id: this.props.reduxStore.movieToGet.id,
        title: '',
        description: ''
    }
  

    //NAVIGATES USER BACK TO DETAILS PAGE; MAKES NO CHANGES TO MOVIE DETAILS
    handleCancel = () => {
        this.props.history.push('/details')
    }

    //DISPATCHES CHANGES FOR UPDATES TO SERVER/DB
    handleSave = (key) => {
        console.log('save button clicked');
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: this.state
        })
        console.log(this.state);
        this.props.history.push('/')
    }


    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }



    render () {



        return (


            <div>
                

                {/* {this.props.reduxStore.movieToGet.map(info => {
                    return (
                        <div key={info.id}>
                            <h1>Edit {info.title}:</h1><br />
                            <img src={info.poster} alt={info.title} /><br />
                        </div>
                    )
                })} */}

                <div key={this.props.reduxStore.movieToGet.id}>
                    <h1>Edit {this.props.reduxStore.movieToGet.title}:</h1><br />
                    <img src={this.props.reduxStore.movieToGet.poster} alt={this.props.reduxStore.movieToGet.title} /><br />
                </div>

                <form >
                    <TextField  id="outlined-title" margin="normal" variant="outlined" 
                                type="text" placeholder="Edit Title" 
                                onChange={this.handleChangeTitle} /> <br />
                    <TextField  id="outlined-title" margin="normal" variant="outlined" 
                                multiline rows="4" type="text" placeholder="Edit Description" 
                                onChange={this.handleChangeDescription} /> <br />
                </form>
                
                <Button variant="outlined" onClick={this.handleCancel}>Cancel</Button>
                <Button variant="outlined" onClick={this.handleSave}>Save Changes</Button>

                {/* {JSON.stringify(this.state)} */}
                {JSON.stringify(this.props.reduxStore.movieToGet.id)}

            </div>
        )
    }
}




const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps) (Edit);