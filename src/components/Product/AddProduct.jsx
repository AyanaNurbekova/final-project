import { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';

function AddProduct() {
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
        }}> ADD PRODUCT</Typography>
        <Grid container spacing={3}
        sx={{
          marginLeft:'10%',
          marginRight:'10%',
          display:'flex',
          flexDirection:'column',
        
        }}>
          <Grid item xs={12} >
            <Typography >Product Title</Typography>
              <TextField
              fullWidth
              onChange={handleInp} 
              type="text" 
              name='title'
              placeholder="title" />
          </Grid>

         <Grid item xs={12} >
           <Typography>Product Type</Typography>
           <TextField
            fullWidth
            onChange={handleInp}
            type="text" 
            name='type'
            placeholder="type" />
         </Grid>
         
         <Grid item xs={12}>
           <Typography>Price</Typography>
           <TextField
            fullWidth
            onChange={handleInp}
            type="number" 
            name='price' 
           placeholder="price" />
         </Grid>

         <Grid item xs={12} >
          <Typography>Product Image</Typography>
           <TextField
           fullWidth
           onChange={handleInp} 
           type="text" 
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

export default AddProduct;