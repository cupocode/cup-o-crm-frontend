import React, {useContext} from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import {firebaseAuth} from '../../provider/AuthProvider'
import firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const RegisterView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    e.preventDefault();
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection("users").add({
    Name: "Branon@brandon.com"
  });  

    console.log('handleSubmit')
    //wait to signup 
    await handleSignup()

    //push home
    navigate('/login', { replace: true });
   
  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }


  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
         
              
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
      {/* replace the div tags with a form tag */}
      Signup
      {/* make inputs  */}
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button>signup</button>
      {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
    </form>
            
          
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
