import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import NavabarContextProvider from './context/NavbarContextProvider';
import ProductContextProvider from './context/ProductContextProvider';
import AuthContextProvider from './context/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <ProductContextProvider>
    <AuthContextProvider>
      <NavabarContextProvider>
        <App />
       </NavabarContextProvider>
    </AuthContextProvider> 
  </ProductContextProvider>
</BrowserRouter>
);




