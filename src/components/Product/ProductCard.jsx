import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContextProvider';
import { Box } from '@mui/system';
import './AddProduct.css';
import { useAuth } from '../../context/AuthContextProvider';
import { IconButton, Rating, Stack } from '@mui/material';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

function ProductCard({ product }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const ADMIN = 'admin@gmail.com'
  const {user: {email}} = useAuth()
  return (
    <Box  
     sx={{
      marginTop:'20px',
      marginBottom:'20px'
    }}> 
       <Card 
       sx={{ 
        width: '300px',
        }}>
        <CardMedia
          sx={{ height: 190}}
          image={product.image}
          title=""
        />
        <CardContent>
          <Typography variant="h5" component="div">
          {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
          {product.type}
          </Typography>
          <Typography variant="h6">$ {product.price}</Typography>
       </CardContent>
       {email === ADMIN && (
        <CardActions>

          <Button 
          onClick={() => deleteProduct(product.id)} >
            DELETE
          </Button>
          <Button
            onClick={() => navigate(`/menu/${product.id}`)}>
             EDIT
          </Button>

          <Stack spacing={1}>

            <Rating name="size-medium" defaultValue={2} />

          </Stack>

          <IconButton 
              edge='end'
              onClick={() => navigate('/basket')}
               sx={{ 
                color:'black', }}>
                <BookmarkOutlinedIcon sx={{
                  width: '30px',
                  height: '30px',
                }}
                 />
              </IconButton>
        </CardActions>)}
     </Card>
    </Box> 
  );
}

export default ProductCard;