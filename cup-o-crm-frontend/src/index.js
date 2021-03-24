import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import AuthProvider from './provider/AuthProvider'




ReactDOM.render((
  <BrowserRouter>
  <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
