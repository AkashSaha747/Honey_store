import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ChakraProvider>
<Auth0Provider  domain="dev-y3uk8ebd2bta1frm.us.auth0.com"
    clientId="q30ib3iSmZgYs4XCKwuvYAljE50VxGe2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <App />
</Auth0Provider>
</ChakraProvider>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
