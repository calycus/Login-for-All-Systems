import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';


import "./Login.css"
import { Box } from '@mui/system';

const Login = () => {
    const theme = useTheme()
    return (
        <div className="login-box">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ minWidth: '180px', maxWidth: '180px' }} src='/image/Logo.png'></img>
            </div>
            <Box className="boxContainer">
                <div className="user-box">
                    <TextField className="loginTextFile" sx={{ width: "100%" }} id="standard-basic" label="User" variant="standard" color="loginButton"/>
                </div>
                <div className="user-box">
                    <TextField id="standard-basic" sx={{ width: "100%" }} label="Password" variant="standard" color="loginButton" className="loginTextFile" />
                </div>
                <CardActions sx={{ paddingTop: "2rem" }}>
                    <Button variant="outlined" color="loginButton" sx={{ fontWeight: "bolder" }}>
                        Iniciar Sesión
                    </Button>
                </CardActions>
            </Box>
        </div>
    )

}

export default Login

