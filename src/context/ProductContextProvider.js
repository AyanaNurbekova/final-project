import React, { createContext, useContext,  useReducer } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  // orderBy,
  where,
} from 'firebase/firestore';
import { db } from '../fire';

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload };

    case 'GET_PRODUCT_DETAILS':
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //  collection - функция для полученя ссылки на коллекцию данных
  const productsCollectionRef = collection(db, 'products');

  //  read
  async function getProducts() {
    const data = await getDocs(productsCollectionRef);

    dispatch({
      type: 'GET_PRODUCTS',
      payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });

    
  }

  //create
  async function createProduct(newProduct) {
    await addDoc(productsCollectionRef, newProduct);
  }

  // update
  async function getOneProductDetails(id) {
    const productDocRef = doc(db, 'products', id);

    // console.log(productDocRef, 'ref');
    const productDetails = await getDoc(productDocRef);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: productDetails.data(),
    });

    console.log(id);
  }

  async function updateProduct(id, updatedProduct) {
    const productDocRef = doc(db, 'products', id);

    await updateDoc(productDocRef, updatedProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    const productDocRef = doc(db, 'products', id);
    await deleteDoc(productDocRef);
    getProducts();
  }

  async function testData(filter, type) {
    if (type == "All") {
        const data = await getDocs(productsCollectionRef);
        dispatch({
          type: 'GET_PRODUCTS',
          payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
    } else {
        const q = query(productsCollectionRef, where(filter, "==", type));
        let filterArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            filterArr.push(doc.data());
        });
        dispatch({
          type: 'GET_PRODUCTS',
          payload: filterArr,
        });
    }
}const values = {
    productDetails: state.productDetails,
    getOneProductDetails,
    updateProduct,
    deleteProduct,

    createProduct,
    getProducts,
    products: state.products,

    testData
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}

  

export default ProductContextProvider;
