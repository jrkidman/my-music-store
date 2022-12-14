import { Box } from '@mui/material';
import { useState } from 'react';
import { productList } from '../components/MockData';
import Layout from '../components/Layout';
import ProductDisplay from './ProductDisplay';

function HomePage(props) {
  const { shoppingCart } = props;
  const { setShoppingCart } = props;

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={6} bgcolor="">
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
