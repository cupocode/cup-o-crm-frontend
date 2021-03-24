import 'react-perfect-scrollbar/dist/css/styles.css';
import React, {useContext} from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import Login from './views/auth/LoginView'
import {firebaseAuth} from './provider/AuthProvider'
import AuthProvider from './provider/AuthProvider';

import firebase from "firebase/app";
    import "firebase/auth";

const App = () => {

  let user = firebase.auth().currentUser;
            console.log(user && user.email)
  

  const { token } = useContext(firebaseAuth)
  console.log(token)

  const {handleSignup} = useContext(firebaseAuth)
  console.log(handleSignup)

  const routing = useRoutes(routes);
  

  return (
  
    <ThemeProvider theme={theme}>

      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
