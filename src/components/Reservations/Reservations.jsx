import React from 'react';
import { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';

function Reservations() {
  const {createProduct} = useProducts();
  
  const navigate  = useNavigate();

  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
  });

  const handleInp = (e) => {
    if(e.target.name === 'price'){
      let obj = {...product, [e.target.name] : Number(e.target.value)};
      setProduct(obj);
    }else{
      let obj = {...product, [e.target.name] : e.target.value};
      setProduct(obj);
    }
  }

  console.log(product);

  return (
    <div>

      <Box sx={{
        display:'flex',
        margin: '10%',
        padding:'2%',
        alignItems: 'center',
        flexWrap:'wrap',
        justifyContent:'center',
        backgroundColor:'#c1bab1'
      }}>

        <Typography sx={{
          fontSize:'20px'
        }}> RESERVATON</Typography>
        <Grid container spacing={3}
        sx={{
          marginLeft:'10%',
          marginRight:'10%',
          display:'flex',
          flexDirection:'column',
        
        }}>
          <Grid item xs={12} >
            <Typography >Location</Typography>
              <TextField
              fullWidth
              onChange={handleInp} 
              type="text" 
              name='location'
              placeholder="location" />
          </Grid>

         <Grid item xs={12}>
           <select id="seats" class="form-control unselected" name="seats">
              <option value="" selected="" disabled="">Number of People</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7">7 People</option>
              <option value="8">8+ People</option>
            </select>   
         </Grid>

  

         <Grid item xs={12} >
          <Typography>Date - Time</Typography>
           <TextField
           fullWidth
           onChange={handleInp} 
           type='datetime-local' 
           name='image'
           placeholder="image url" />
         </Grid>
       </Grid>
 
        <Button
        sx={{
          margin:'15px',
          padding:'5px',
          backgroundColor:'gray'
        }}
        onClick={() => {
        createProduct(product); 
        navigate ('/menu')}} 
        variant="background" 
        type="button">
        Add Product
        </Button>
      </Box> 
    </div>
  );
}

export default Reservations;