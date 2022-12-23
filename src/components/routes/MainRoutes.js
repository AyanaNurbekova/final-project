import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import ReservationsPage from '../pages/ReservetionsPage';
import AdminPage from '../pages/AdminPage';
import EditPage from '../pages/EditPage';
import AddProduct from '../Product/AddProduct';
import AuthPage from '../pages/AuthPage'
import SignInPage from '../pages/SignInPage';
import { useAuth } from '../../context/AuthContextProvider';
import { ADMIN } from '../helpers/const';
import ContactPage from '../pages/ContactPage';
import NotFound from '../NotFoundPage/NotFound';

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
     { link: '/home', element: <HomePage/>, id: 1 },
     { link: '/menu', element: <MenuPage/>, id: 2 },
     { link: '/auth', element: <AuthPage/>, id: 3},
     { link: '/signin', element: <SignInPage/>, id: 4},
     { link: '/reservations', element: <ReservationsPage/>, id: 5},
     {link : '/contact', element: <ContactPage/>, id:6 },
     { link: '/menu/:id', element: <EditPage />,  id: 7},
     { link: '*', element: <NotFound/> ,id: 8},

  ];

   const PRIVATE_ROUTES = [
    { link: '/admin', element: <AdminPage/>, id: 9 },
    { link: '/menu/:id', element: <EditPage />,  id: 10},
    { link: '/addproducts', element: <AddProduct />, id: 11 },
   ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to='*' />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </div>
  );
};

export default MainRoutes;