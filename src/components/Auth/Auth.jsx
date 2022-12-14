import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider'
import './Auth.css'
const Auth = () => {
  const navigate = useNavigate();
  
  const {
    handleAddNew,
    setPassword,
    setEmail
  } = useAuth(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
       <img className='bg-image' 
          src='https://s1.1zoom.ru/b5050/551/Grapes_Wine_Black_background_Stemware_512143_1920x1080.jpg' alt=''/>
      <Box className='auth'
       sx={{
        width:'100%',
       }}>
        <Box className='box2'
        sx={{
        }}>
          <Box className='box3'
            maxWidth="xs"
            sx={{
            padding:'10px',
            borderRadius:'8px',
            border: '1.5px solid grey',
            position:'absolute', 
            right: '59%',
            left: '20%',
            bottom: '30%',
            top: '30%',
            color:'white',
            backgroundColor:'#c1bab1'
           }}>

            
            <Typography sx={{
              paddingLeft:'80px',
              color:'black',
              fontSize:'20px',
              fontFamily:'serif'
              }}>
              Add new account
           </Typography>
            <Box>
              <Grid item xs={12} sm={6}
               className='b-2'
               component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate onSubmit={handleSubmit} 
              >
               <TextField 
               label="Email" 
               variant="standard"
               autoComplete="email" 
               color='background'
               onChange={(e) => setEmail(e.target.value)}
                
               />
 
               <TextField 
               label="Password" 
               variant="standard" 
               type="password"
               autoComplete="new-password"
               color='background'
               onChange={(e) => setPassword(e.target.value)}
               />
              </Grid>
            </Box>
            <Box sx={{
              paddingLeft:'85px',
            }}>
             <Button
                onClick={() => { 
                handleAddNew();
                navigate('/home')}}
                sx={{
                color:'black',
                fontSize:'14px', 
                border:'1.5px solid black',
                fontFamily:'serif',
                mt:'15%',
                marginRight:'25px'
                }}> Add account
              </Button>
            </Box>
            <Grid container
               justifyContent='center'
               sx={{
                mt:'5%',
               }}>
                <Grid item>
                  <Link onClick={() => navigate('/signin')}>
                  {" Has account? Log In"}
                  </Link>
                 
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Auth;