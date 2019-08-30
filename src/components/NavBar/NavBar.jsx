import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './NavBar.css'


const NavBar = () => {
    return (
        <div className="headerDiv">
            <AppBar position="static">
                <Toolbar>
                    <Typography>
                          
                        <h1>Saga Movies List</h1> 
                            
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}





export default NavBar;