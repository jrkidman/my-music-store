import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

function CartItem({ productData }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={productData.title}
        subheader={productData.brand}
      />
      <CardMedia
        component="img"
        height="294"
        image={productData.image}
        alt={productData.description}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width={1}>
          {/* <button
            id="addToCart"
            type="submit"
            onClick={() => {
              console.log('shopping cart: ', shoppingCart);
              const updatedCart = [...shoppingCart];
              console.log('updated shopping cart before: ', updatedCart);

              // check for existing product in cart to set quantity
              const addToCart = (product) => {
                console.log('product: ', product);
                const checkId = updatedCart.findIndex(
                  (cartProduct) => cartProduct.productId === product.productId,
                );
                if (checkId !== -1) {
                  updatedCart[checkId].quantity++;
                  console.log('Quantity updated:', updatedCart);
                  console.log('updated shopping cart after: ', updatedCart);
                } else {
                  product.quantity = 1;
                  updatedCart.push(product);
                  console.log('Product added to cart:', updatedCart);
                  console.log('updated shopping cart after: ', updatedCart);
                }
                setShoppingCart(updatedCart);
              };
              addToCart(productData);
            }}
          >
            Add to Cart
          </button> */}

          {/* <Button
            id="add-to-cart"
            type="submit"
            onClick={() => {
              setShoppingCart(...shoppingCart, { productData });
              console.log('cart: ', shoppingCart);
            }}

          >
            Add to cart

          </Button> */}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default CartItem;
