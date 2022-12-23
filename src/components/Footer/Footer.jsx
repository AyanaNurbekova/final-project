import {  Container, createTheme, Link, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react';

const Footer = () => {

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 425,
                sm: 750,
                md: 960,
                lg: 1200,
                xl: 1536,
            },
        },
    });
    return (
        <div>
            <Box className='footer-big'
             sx={{
                backgroundColor:'#11161c',
                padding:'5%',
                [theme.breakpoints.down("sm")]: {
                    width: "100%",  
                                
                },
             }}
            >
                <Container className='footer'
                sx={{
                    backgroundColor:'#11161c',
                    display:'flex',
                    justifyContent:'space-between',
                    color:'#c1bab1',
                    [theme.breakpoints.down("sm")]: {
                        width: "85%",
                        display:'flex',
                        flexWrap:'wrap',
                        flexDirection:'column'
                       
                    },
                 }}>

                 <Box className='address-box'>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        marginBottom:'15px',
                       }}>
                       <Typography >
                        ADDRESS
                       </Typography>
                    </Box>

                    <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                        <Typography>
                        15 Beaufain Street
                        
                        </Typography>
                    </Box> 
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                       <Typography >
                       Charleston, SC 29401
                       </Typography>
                    </Box> 
                 </Box>



                 <Box className='follow-box' >
                    <Box
                    sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                        <Typography>
                            FOLLOW
                        </Typography>
                    </Box>

                    <Box className='icons'
                     sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                    <List className='icons'
                       sx={{
                         display: 'flex',}}
                       >
                         <ListItem>
                            <Link 
                             href='https://www.facebook.com/Netflix/' 
                             className='facebook-icon'>
                             <FacebookIcon 
                             sx={{
                                color:'#c1bab1',
                            }}
                             />
                            </Link>
                         </ListItem>
                         
                         <ListItem>
                            <Link 
                             href='https://www.instagram.com/Netflix' 
                             className='instagram-icon'>
                             <InstagramIcon
                             sx={{
                                color:'#c1bab1',
                            }}
                              />
                            </Link>
                         </ListItem>
                      
                         <ListItem>
                            <Link 
                             href='https://www.youtube.com/@Netflix' 
                             className='youtube-icon'>
                             <YouTubeIcon 
                             sx={{
                                color:'#c1bab1',
                            }}  
                             />
                            </Link>
                         </ListItem>
                       </List>
                    </Box>

                    <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                        <Typography>
                            {'© 2022 Made by Ayana'}
                        </Typography>
                    </Box>
                 </Box>



                 <Box className='contact-box'>
                       <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        marginBottom:'15px'
                       }}>
                          <Typography>
                           CONTACT
                          </Typography>
                       </Box>
                       <Box
                       sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                           <Typography>
                            nurbekovaayana@gmail.com
                            
                           </Typography>
                       </Box>   
                       <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                       }}>
                          <Typography>
                          +996 (500) 77-25-07
                          </Typography>
                       </Box> 
                 </Box>



                </Container>

            </Box>
        </div>
    );
};

export default Footer;