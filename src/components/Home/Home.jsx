import { Box, Button, createTheme, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {

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

  const navigate = useNavigate();
  return (
    <div>
      <Box className='home-background'>
        <Box className='main-img'> 
          <Box > 
           <Box 
              className='title-box'
              sx={{
                position:'absolute', 
                right: '0',
                left: '0',
                bottom: '0',
                top: '25%',
                fontSize: {
                xs: 25,
                sm: 35,
                md: 55,
                lg: 75,
                xl: 95,
                },
              }}
             >
              <Typography
              sx={{
                fontFamily:'serif',
                display:'flex',
                justifyContent:'center',
                fontSize: {
                  xs: 25,
                  sm: 35,
                  md: 55,
                  lg: 75,
                  xl: 95,
                  }, 
              }} >WELCOME 
              </Typography>
 
              <Typography
              sx={{
                fontSize: {
                  xs: 20,
                  sm: 25,
                  md: 35,
                  lg: 45,
                  xl: 55,
                  },
                fontFamily:'serif', 
                display:'flex',
                justifyContent:'center'
              }} >
              TO THE 
              </Typography>

              <Typography
              sx={{
                fontFamily:'serif', 
                display:'flex',
                justifyContent:'center',
                fontSize: {
                  xs: 25,
                  sm: 35,
                  md: 55,
                  lg: 75,
                  xl: 95,
                  }, 
              }} >
              UVETTA
              </Typography>
           </Box>
          </Box>

          <img
          className='img-bg'
          src="https://dine.withemes.com/wp-content/uploads/2022/09/Stocksy_txpcd1dc0eemKP100_Medium_1292869.jpg" alt=""
          width='100%'
         height= '100%' />
          
          
          
          
         
          {/* ============================== BOX OUR STORY =======================================*/}
          <Box className='box-ourstory'
            sx={{
            margin:'1%',
            }}>
            <Box>
              <Typography
               sx={{
               fontSize:'45px',
               fontFamily:'serif',
               display:'flex',
               justifyContent:'center',
               paddingBottom:'15px',
               [theme.breakpoints.down("sm")]: {
                fontSize:'30px',
               },
               [theme.breakpoints.down("xs")]: {
                fontSize:'25px',
               },
               }}>DISCOVER OUR STORY
              </Typography>
            </Box>

            <Box className='box-l-r'>
              <Typography className='text1'
              sx={{
                fontSize:'20px',
                fontFamily:'serif',
                alignItems:'center',
                 [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                  width:'50%',
                  height:'30%',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                  width:'70%',
                  height:'50%', 
                },
              }}>
                Uvetta is a restaraunt, bar and coffe... 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo asperiores dolorum temporibus aliquam sequi natus. Sequi ipsa earum quod ipsum blanditiis fugiat eaque voluptatibus, debitis velit quos delectus fuga dolorum?
              </Typography>
              
             <div className='imgdiv1' 
             >
               <Box className='right-box'sx={{
              width: '45%',
              [theme.breakpoints.down("xs")]: {
               width:'20%',
                height:'20%',
              },
              [theme.breakpoints.down("sm")]: {
               width:'70%',
                height:'65%',
                
              },
              [theme.breakpoints.down("md")]: {
                width:'70%',
                 height:'65%',
                 
               },
             
             }}>
                 <img className='img1' src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""
                 width='100%' 
                 height='80%'/>
                </Box>
              <Box sx={{
                width: '45%',
                marginLeft:'-25px',
                marginTop:'70px',
                [theme.breakpoints.down("xs")]: {
                display: 'flex',
                width:'20%',
                height:'5%',
                },
                [theme.breakpoints.down("sm")]: {
                width:'65%',
                height:'75%',
                marginLeft:'-20px',
                marginTop:'25px'
                },
                [theme.breakpoints.down("md")]: {
                  width:'65%',
                  height:'75%',
                  marginLeft:'-20px',
                  marginTop:'25px'
                },
  

              }}>
                <img className='img2' src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""
                width='95%' 
                height='90%'
                />
               </Box>
             </div>

            </Box>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              marginTop:'10px'
            }}>
              <Button
              //  onClick={()=> navigate('/story')}
               sx={{
                fontSize:'15px',
                fontFamily:'serif',
                border:'2px solid black',
                color:'black',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                },
                
              }}> More About it</Button>
            </Box>
          </Box>

          <img className='img-menu'
          src="https://bistrodesartistes.com.au/wp-content/uploads/sites/710/2020/07/2-2.jpg" alt="menu" />

          {/*============================= BOX OUR MENU ================================================ */}
         <Box className='box-ourmenu'
            sx={{
            margin:'1%',
            }}>

            <Box>
              <Typography
               sx={{
               paddingBottom:'15px',
               fontSize:'45px',
               fontFamily:'serif',
               display:'flex',
               justifyContent:'center',
               [theme.breakpoints.down("sm")]: {
                fontSize:'30px',
               },
               [theme.breakpoints.down("xs")]: {
                fontSize:'25px',
               },
               }}>DISCOVER OUR MENU
              </Typography>
            </Box>

            <Box className='box-l-r'>
             <div className='imgdiv2'>
               <Box className='right-box'>

                 <img className='img2-2' src="https://biancazapatka.com/wp-content/uploads/2020/09/best-vegan-mushroom-risotto.jpg" alt="" 
                 width='43%'
                 height='43%'
                 />

                 <img className='img2-2' src="https://sftimes.com/wp-content/uploads/2020/12/italian1.jpg" alt=""
                 width='43%'
                 height='43%' />
               
               
                 <img className='img2-2' src="https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000603046726.jpg" alt="" 
                 width='43%'
                 height='43%' />
              
              
                 <img className='img2-2' src="https://media.gqmagazine.fr/photos/5d8b7254c7191e00083ebdbb/4:3/w_1440,h_1080,c_limit/como%20hacer%20la%20mejor%20pizza%20del%20mundo.jpg" alt="" 
                 width='43%'
                 height='43%'/>

                </Box> 
             </div>
              
              <Typography className='text1'
              sx={{
                fontSize:'18px',
                fontFamily:'serif',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                  width:'80%',
                  height:'25%',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                  width:'70%',
                  height:'50%', 
                },
              }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis illo delectus optio accusamus ex eaque laudantium cumque, quasi ut repellendus cum quibusdam voluptate necessitatibus nesciunt a possimus iusto deserunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat alias rerum ipsam tempore labore nihil placeat est, 
             
              </Typography>
            </Box>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              marginTop:'15px'
            }}>
              <Button
               onClick={() => navigate("/menu")}
               sx={{
                fontSize:'15px',
                fontFamily:'serif',
                border:'2px solid black',
                color:'black',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                },
              }}> More About it</Button>
            </Box>
              
          </Box>
            <img className='img-reserv'
              src="https://cdn.oliverbonacininetwork.com/uploads/sites/42/2022/04/Canoe-Interior-Evening-Vibes-5170.jpg" alt=""
              width='100%'
              height='100%' />

          {/* =====================BOX FOR RESERVATION =========================== */}
          <Box className='box-reservation'
            sx={{
            margin:'1%',
            }}>
            <Box>
              <Typography
               sx={{
               fontSize:'45px',
               fontFamily:'serif',
               display:'flex',
               justifyContent:'center',
               paddingBottom:'15px',
               [theme.breakpoints.down("xs")]: {
                 fontSize:'20px'
                },
                [theme.breakpoints.down("sm")]: {
                 fontSize:'25px'
                },
               }}>MAKE  A  RESERVATION
              </Typography>
            </Box>

            <Box className='box-l-r'>
              
              <Typography className='text1'
              sx={{
                fontSize:'18px',
                fontFamily:'serif',
                // justifyContent:'space-evenly',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                  width:'80%',
                  height:'25%'
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                  width:'50%',
                  height:'40%'
                },
              }}>
                PRIVATE DINING
               <br/>
                The Main Dining Room can accommodate up to 18 guests and requires either a half night or full night buyout. Reservations are available online 6 weeks before the date of the reservation. 
              </Typography>
              
             <div className='imgdiv3'>
                <Typography sx={{
                fontSize:'18px',
                fontFamily:'serif',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                  width:'80%',
                  height:'20%',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                  width:'90%',
                  height:'35%'
                },
              }}>
                 PRIVATE EVENTS
                 <br />
                 Looking for an ideal venue? Look no further. Corporate dinners, special occasions, Chef’s Table, let us handle your needs. Reservations are available online 6 weeks before the date of the reservation.
                </Typography>
             </div>

            </Box>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              marginTop:'20px'
            }}>
              <Button 
              onClick={() => navigate ('/reservations')}
              sx={{
                fontSize:'15px',
                fontFamily:'serif',
                border:'2px solid black',
                color:'black',
                [theme.breakpoints.down("xs")]: { 
                  fontSize:'10px',
                },
                [theme.breakpoints.down("sm")]: { 
                  fontSize:'13px',
                },
              }}> Reservation</Button>
            </Box>
          </Box>

          <Box 
          sx={{
            display:'flex', 
            width:'100%',
          }}>

            <img 
            src="https://matchthemes.com/demowp/caverta/wp-content/uploads/sb-instagram-feed-images/156752765_825864221333119_8378680595886233890_nlow.jpg" alt=""
            width='20%' />

            <img
            src="https://matchthemes.com/demowp/caverta/wp-content/uploads/sb-instagram-feed-images/156675538_472344493979926_1658538045818179352_nlow.jpg" alt="" 
            width='20%'/>

            <img 
            src="https://matchthemes.com/demowp/caverta/wp-content/uploads/sb-instagram-feed-images/156746314_428790565078758_1547459469142072633_nlow.jpg" alt=""
            width='20%' />

            <img src="https://matchthemes.com/demowp/caverta/wp-content/uploads/sb-instagram-feed-images/157197652_3742380705861091_6557079344600179294_nlow.jpg" alt=""
             width='20%'/>

            <img src="https://matchthemes.com/demowp/caverta/wp-content/uploads/sb-instagram-feed-images/157197652_3742380705861091_6557079344600179294_nlow.jpg" alt=""
            width='20%'/>            
          </Box>
        </Box> 
      </Box>  
    </div> 
  );
};

export default Home;