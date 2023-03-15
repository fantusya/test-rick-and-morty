import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';
import FontStyles from 'constants/FontStyles';

import { theme } from 'constants/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="714258559297-ataptpnjfp8n715bicbhfkl4hris66un.apps.googleusercontent.com">
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <BrowserRouter basename="/test-rick-and-morty"> */}
          <FontStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
