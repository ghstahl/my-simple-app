import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './startup';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import fetchService from './utils/fetch-service';

// Add these imports - Step 1
import { Provider } from 'react-redux';  
import { configureStore } from './redux-stuff/store';
import { getStore } from './redux-stuff/global-store'
import GeodComponent from './GeodComponent';
import App from './App';


window.p7hostGlobal = {
    store:null
}
let url = 'config.json';
fetchService.fetch(url).then((data)=>{
  configureStore();
  let store = getStore();
  
  // Wrap existing app in Provider - Step 2
  ReactDOM.render((
    <HashRouter>
      <Provider store={store}>
        <App></App>
      </Provider>
    </HashRouter>
    ),
      document.getElementById('root')
    );
  registerServiceWorker();
})
