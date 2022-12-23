import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useProducts } from '../../context/ProductContextProvider';
import ProductCard from './ProductCard';
import './AddProduct.css'

const ProductList = ({currentData}) => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box 
     sx={{
      display: "flex",
      justifyContent:'space-evenly',
      flexWrap:'wrap',
      backgroundColor:'#c1bab1'
    }}>
      {products && products.length > 0 ? (
        currentData().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ProductList;
