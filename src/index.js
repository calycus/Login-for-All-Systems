import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import App2 from './Components/App2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004600',
    },
    secondary: {
      main: '#26A69A',
    },
    loginButton: {
      main: '#1390CB',
    },
    negative: {
      main: '#C10015',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

);

/* 
<Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
     */