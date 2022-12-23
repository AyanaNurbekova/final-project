import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import Icon from '@mui/material/Icon';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { createTheme, Divider, ListItemIcon } from '@mui/material';
import { Login, Logout, PersonAdd } from '@mui/icons-material';
import { ADMIN } from '../helpers/const';
import { useAuth } from '../../context/AuthContextProvider';



function Navbar() {

  //   const theme = createTheme({
  //     breakpoints: {
  //         values: {
  //             xs: 425,
  //             sm: 750,
  //             md: 960,
  //             lg: 1200,
  //             xl: 1536,
  //         },
  //     },
  //  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const open = Boolean(anchorElUser);

  const navigate = useNavigate();

  const {user: { email },handleSignout} = useAuth();


  return (
    <AppBar className='appbar' position="absolute">
      <Container maxWidth="xl"
        className='navbar'>
        <Toolbar 
          className='toolbar'
        >
          <Box
          className='uvetta'
          sx={{
          }}
          >
            <Typography
            variant="h6"
            noWrap
            sx={{
              display: { xs: 'none', md: 'flex' },
              color:'#c1bab1',
              textDecoration: 'none',
            }}>
            <Icon fontSize='20px'>U</Icon>
            <Icon fontSize='20px'>V</Icon>
            <Icon fontSize='20px'>E</Icon>
            <Icon fontSize='20px'>T</Icon>
            <Icon fontSize='20px'>T</Icon>
            <Icon fontSize='20px'>A</Icon>
            </Typography>
          
          </Box>


         

          <Box 
           className='mobile-menu'
           sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              edge='start'
              onClick={handleOpenNavMenu}
              color='#c1bab1'
            >
              <MenuIcon  sx={{
                color:'#c1bab1'
              }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                
                display: { xs: 'block', md: 'none' },
                color: 'black'
              }}
              >
                <MenuItem
                 onClick={handleCloseNavMenu}>
                 <Typography 
                 sx={{
                  textDecoration:'none',
                 }}
                 textAlign="center"
                 >Home</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                 <Typography 
                 sx={{
                  textDecoration:'none',
                 }}
                 textAlign="center"
                 >Menu</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                  sx={{
                   textDecoration:'none',
                  }} 
                  textAlign="center"
                  >Reservations</Typography>
                </MenuItem>
            
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                  sx={{
                   textDecoration:'none',
                  }} 
                  textAlign="center"
                  >Contact</Typography>
                </MenuItem>
            </Menu> 
          </Box>
        
          <Box
           className='navbar-menu-link' 
           sx={{ flexGrow: 1, display: { xs: 'none', md:   'flex' }, justifyContent:'space-evenly' }}>
            <Link to='/home'>
              <Typography
                sx={{ my: 2,
                color:'#c1bab1',
                display: 'block',fontSize:'16px', 
                fontFamily:'serif',  }}
              > HOME
              </Typography>
            </Link>
            
           <Link to='/menu'>
             <Typography
              sx={{ my: 2,
              color:'#c1bab1', 
              display: 'block',fontSize:'16px' , fontFamily:'serif' }}
            > MENU
            </Typography>
            </Link>

            <Link to='/reservations'>
             <Typography
              sx={{ my: 2,
              color:'#c1bab1', 
              display: 'block',fontSize:'16px' , fontFamily:'serif' }}
            > RESERVATIONS
            </Typography>
            </Link>
             
            {email === ADMIN ? (
            <Link to='/admin'>
             <Typography
              sx={{ my: 2,
              color:'#c1bab1', 
              display: 'block',fontSize:'16px' , fontFamily:'serif' }}
            > ADMIN
              </Typography>
            </Link>
            ) : (
              <></>
            )}

            <Link to='/contact'>
             <Typography
              sx={{ my: 2,
              color:'#c1bab1', 
              display: 'block',fontSize:'16px' , fontFamily:'serif' }}
            > CONTACT
            </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open basket">
              <IconButton 
              edge='end'
              onClick={() => navigate('/basket')}
               sx={{ 
                color:'#c1bab1', }}>
                <ShoppingCartOutlinedIcon sx={{
                  width: '30px',
                  height: '30px',
                }}
                 />
              </IconButton>
            </Tooltip>
             <Tooltip title="Account settings">
               <IconButton
                 onClick={handleOpenUserMenu}
                 edge='end'
                 size="small"
                 sx={{ ml: 2 }}
                 aria-controls={open ? 'account-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
               >
                 <Avatar sx={{ width: 30, height: 30 }}></Avatar>
               </IconButton>
             </Tooltip>
           
            <Menu
             anchorEl={anchorElUser}
             id="account-menu"
             open={open}
             onClose={handleCloseUserMenu}
             onClick={handleCloseUserMenu}
             PaperProps={{
               elevation: 0,
               sx: {
                 color: '#c1bab1',
                 backgroundColor:" #101b28",
                 overflow: 'visible',
                 filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                 mt: 1.5,
                 '& .MuiAvatar-root': {
                   width: 30,
                   height: 30,
                   ml: -0.5,
                   mr: 1,
                 },
                 '&:before': {
                   content: '""',
                   display: 'block',
                   position: 'absolute',
                   top: 0,
                   right: 14,
                   width: 10,
                   height: 10,
                   bgcolor: 'background.paper',
                   transform: 'translateY(-50%) rotate(45deg)',
                   zIndex: 0,
                 },
               },
             }}
             transformOrigin={{ horizontal: 'right', vertical: 'top' }}
             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
           >
             <Divider />
             <MenuItem 
             onClick={() => navigate('/auth')}>
             <ListItemIcon>
                <PersonAdd 
                sx={{
                color: '#c1bab1',
                }}
                fontSize="small" />
             </ListItemIcon>
              Add new account
             </MenuItem>
             {email ? (
              <Link to='/auth'
                 style={{
                  textDecoration: 'none ',
                 }}>
                 <MenuItem  onClick={handleSignout}>
                   <ListItemIcon>
                    <Logout 
                  sx={{
                  color: '#c1bab1',
                 }}
                  fontSize="small"
                  />
                 </ListItemIcon>
                  Log out
                 </MenuItem> 
              </Link> 
              ) : (
                  <MenuItem onClick={handleSignout} >
                   <ListItemIcon>
                     <Login
                      sx={{
                      color: '#c1bab1',
                      }}
                      fontSize="small"
                      />
                   </ListItemIcon>
                       Log in
                   </MenuItem>  
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;