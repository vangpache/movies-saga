import React from 'react';
import {AppBar, Typography, Paper} from '@material-ui/core';




import './NavBar.css'


const NavBar = () => {
    return (


        <Paper>
            <AppBar position="static">
              
                    <Typography variant="display4" align="center" gutterBottom  >

                        Saga Movies List

                    </Typography>
              
            </AppBar>

        </Paper>
        
            
     
      
    )
}





export default NavBar;