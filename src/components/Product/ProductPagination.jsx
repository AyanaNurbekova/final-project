import { Box, Pagination, Stack } from '@mui/material';
import React from 'react';

const ProductPagination = ({page, setPage, count}) => {
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <div>
      <Box>
        <Stack spacing={2}>
          <Pagination 
          page={page}  
          count={count} 
          onChange={handleChange} 
          variant="outlined" 
          color="primary" />
        </Stack>
      </Box>
    </div>
  );
};

export default ProductPagination;