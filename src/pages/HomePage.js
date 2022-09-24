import { Box } from '@mui/material';
import { productList } from '../components/MockData';
import Layout from '../components/Layout';
import ProductDisplay from './ProductDisplay';

function HomePage() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        {productList.map((product) => (
          <Box mb={6} bgcolor="pink">
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
