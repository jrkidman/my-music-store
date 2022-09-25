import React, { useState } from 'react';
import { Box } from '@mui/material';
import ProductDisplay from './ProductDisplay';
import { productList } from '../components/MockData';
import Layout from '../components/Layout';

function Cart(props) {
  const { shoppingCart } = props;

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {shoppingCart.map((product) => (
          <Box mb={6} bgcolor="pink">
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>

  );
}

export default Cart;
