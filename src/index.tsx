import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';

import App from './App';
import { setupStore } from './store';

const container = document.getElementById('root')  as HTMLElement;
const root = createRoot(container); 
root.render( <Provider store={setupStore()}>
  <App />
</Provider>);