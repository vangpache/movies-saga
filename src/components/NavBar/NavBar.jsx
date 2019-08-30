import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';


import './NavBar.css'


const NavBar = () => {
    return (
        <div className="container">

        
        <div className="headerDiv">
            <AppBar position="static">
                <Toolbar>
                    {/* <Typography variant="title"> */}
                
                            <h1>Saga Movies List</h1> 

                    {/* </Typography> */}
                </Toolbar>
            </AppBar>
        </div>
        </div>
    )
}





export default NavBar;