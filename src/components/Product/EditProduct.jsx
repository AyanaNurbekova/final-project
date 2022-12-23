import { useEffect, useState } from 'react';
import { Box, Button, createTheme, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';

function AddProduct() {
  
  const { id } = useParams();
  const { getOneProductDetails, productDetails, updateProduct } = useProducts();
  const [editedProduct, setEditedProduct] = useState(productDetails);
  useEffect(() => {
    getOneProductDetails(id);
  }, []);
  useEffect(() => {
    setEditedProduct(productDetails);
  }, [productDetails]);
  console.log(productDetails);
  const navigate = useNavigate();
  const handleInp = (e) => {
    let obj = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(obj);
  };

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
      {editedProduct && (
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
          fontSize:'20px',
          [theme.breakpoints.down("sm")]: {
            color: "black",
            fontSize: "15px",
          }
         }}> EDIT PRODUCT</Typography>
          <Grid container spacing={3}
          sx={{
          marginLeft:'10%',
          marginRight:'10%',
          display:'flex',
          flexDirection:'column',
          [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
        
          }}>
          <Grid item xs={12} >
            <Typography >Product Title</Typography>
              <TextField
              fullWidth
              value={editedProduct.title || ''}
              onChange={handleInp} 
              type="text" 
              name='title'
              placeholder="title" />
          </Grid>

         <Grid item xs={12}>
           <Typography>Price</Typography>
           <TextField
            fullWidth
            value={editedProduct.price || ''}
            onChange={handleInp}
            type="number" 
            name='price' 
           placeholder="price" />
         </Grid>

         <Grid item xs={12} >
           <Typography>Product Description</Typography>
           <TextField
            fullWidth
            value={editedProduct.description || ''}
            onChange={handleInp}
            type="text" 
            name='description'
            placeholder="description" />
         </Grid>

         

         <Grid item xs={12} >
          <Typography>Product Image</Typography>
           <TextField
           fullWidth
           value={editedProduct.image || ''}
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
         updateProduct(id, editedProduct);
         navigate('/menu');
         }}
         variant='backgroun'
         type='button'
        >
         Save Changes
         </Button>
       </Box>
      )} 
    </div>
  );
}

export default AddProduct;