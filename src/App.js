import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './CustomThemeProvider';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import { productList } from './components/MockData';

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <HomePage
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
)}
          />

          <Route
            path="sign-in"
            element={(
              <SignIn
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}

              />
)}
          />
          <Route
            path="cart"
            element={(
              <Cart
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
        )}
          />

        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
