import React from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from"./components/Navbar";
import Box from '@mui/material/Box';
import ProductList from "./Products/ProductList";


const Products = () => {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
      <Sidenav/>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*<ProductList />*/}
        <h1>hello</h1>
      
      </Box>

    </Box>
    
    </>
  )
}

export default Products;

