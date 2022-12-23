import { Box, Button,  TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { useAuth } from '../../context/AuthContextProvider';
import './Auth.css'


const SignIn = () => {

  const navigate = useNavigate();

  const {
    email,
    password,
    emailError,
    passwordError,
    setPassword,
    setEmail,
    handleSignin,
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
            right: '57%',
            left: '19%',
            bottom: '30%',
            top: '35%',
            color:'white',
            backgroundColor:'#c1bab1'
           }}>
            <Typography sx={{
              paddingLeft:'40%',
              color:'black',
              fontSize:'20px',
              fontFamily:'serif'
              }}>
               LOG IN
           </Typography>
            <Box sx={{
               paddingLeft:'3%',
            }}>
              <Grid item xs={12} 
               className='b-2'
               component="form"
                sx={{
                '& > :not(style)': { width: '35ch' },
                }}
                noValidate
                onSubmit={handleSubmit} 
              >
 
               <TextField 
               label="Email" 
               variant="standard"
               autoComplete="email"   
               color='background'
               id="email"
               fullWidth
                //helper-text
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{
                  mt:'10%'
                }}
               />
 
               <TextField 
               label="Password" 
               variant="standard" 
               type="password"
               autoComplete="new-password"
               color='background'
               id="password"
               fullWidth
               // ===============
               helperText={passwordError}
               value={password}
               onChange={(e) => {
                 setPassword(e.target.value);
               }}
               />
              </Grid>
            </Box>
            <Box sx={{
              paddingLeft:'40%',
            }}>
            
              
             <Button 
               onClick={() => { 
               handleSignin();
                navigate('/home')}}
                sx={{
                color:'black',
                fontSize:'14px', 
               border:'1.5px solid black',
               fontFamily:'serif',
               mt:'20%'
               }}> Log in
             </Button>
            
            </Box>

             {/* <Grid container
               sx={{
                mt:'20%'
               }}>
                <Grid item>
                  <Link onClick={() => navigate('/auth')}>
                  {" Add your accout."}
                  </Link>
                </Grid>
              </Grid> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;