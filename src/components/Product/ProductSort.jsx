import  React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useProducts } from '../../context/ProductContextProvider';

export default function NativeSelectDemo() {
  const {testData} = useProducts()
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: 120,
        marginTop: '50px',
        marginLeft: {
          xs: '30px',
          sm: '30px',
          md: '0',
          lg: '15px',
          xl: '0',
        },
      }}
    >

      <FormControl fullWidth>
        <InputLabel
          variant='standard'
          htmlFor='uncontrolled-native'
          sx={{ color: 'white' }}
        >
          Sort By Type
        </InputLabel>
        <NativeSelect
          onChange={(e) => testData('type', e.target.value)}
          defaultValue={'All'}
          inputProps={{
            name: 'sort',
          }}
        >
          <option value={'All'}>All</option>
          <option value={'soups'}>Soups</option>
          <option value={'pizza'}>Pizza</option>
          <option value={'pasta'}>Pasta</option>
          <option value={'desserts'}>Desserts</option>
          <option value={'cheese'}>Cheese</option>
          <option value={'coffee'}>Coffee</option>
          <option value={'tea'}>Tea</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
