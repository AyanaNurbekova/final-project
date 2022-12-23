import React, {  useState } from 'react';
import ProductList from '../Product/ProductList';
import ProductPagination from '../Product/ProductPagination';
import ProductSort from '../Product/ProductSort';
import { useProducts } from '../../context/ProductContextProvider';

const MenuPage = () => {
  const {products} = useProducts()
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }
  return (
    <div>
      <ProductSort/>
      <ProductList currentData={currentData}/>
      <ProductPagination 
       page={page}
       setPage={setPage}
       count={count}/>
    </div>
  );
};

export default MenuPage;