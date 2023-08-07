import React from 'react';
import Login from '../../pages/Login';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    <>
   <Login/>

    <div>{children}</div>
   
   <Footer />
    </>
   
  );
};

export default Layout