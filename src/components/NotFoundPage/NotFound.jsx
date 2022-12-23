import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <Box
        className="error"
        title="404"
        sx={{
          width: { xs: '300px', md: '500px' },
          mt: { xs: 5, md: 0 },
        }}>
         404 Page Not Found
      </Box>
    </div>
  );
};

export default NotFound;