import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = {
  colors: {
    primaryColor: '#fff',
    textColor: '#122236',
    secondaryTextColor: '#82909e',
    bgSecondaryColor: '#f3f6f9',
    bgColor: '#e7ecf2',
    borderColor: '#b1a5ed',
    online: 'red',
    offline: 'green',
    colorThead: '#00bfff',
    trColor: '#c9e9ff',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
