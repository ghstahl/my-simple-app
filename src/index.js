import React from 'react';
import ReactDOM from 'react-dom';
import './startup';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Add these imports - Step 1
import { Provider } from 'react-redux';  
import { configureStore } from './redux-stuff/store';
import { getStore } from './redux-stuff/global-store'
import App from './App';



window.p7hostGlobal = {
    store:null
}
configureStore();
let store = getStore();

// Wrap existing app in Provider - Step 2
ReactDOM.render(  
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
registerServiceWorker();
