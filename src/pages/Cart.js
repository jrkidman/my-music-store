import React, { useState } from 'react';
import { Box } from '@mui/material';
// import ProductDisplay from './ProductDisplay';
// import { productList } from '../components/MockData';
import Layout from '../components/Layout';
import CartItem from './CartItem';

function Cart({ shoppingCart }) {

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {shoppingCart.map((product) => (
          <Box mb={6} bgcolor="pink">
            <CartItem productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>

  );
}

export default Cart;
