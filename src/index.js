import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Auth0Provider
    domain="dev-wj3ac1ybn433d20u.uk.auth0.com"
    clientId="Cu5KBL0mlREqCPp5QfT8OEvcYFsb4BHf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }} cacheLocation='localstorage'><UserProvider>
        <ProductsProvider>
    <FilterProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>);
