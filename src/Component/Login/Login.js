import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import {Card, Button, Container} from 'react-bootstrap';
import './Login.css';
import image from '../../Images/google.png';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

const Login = () => {
    const [user, setUser] = useState({})
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
   
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          const { displayName, email } = user;
            const singInUser = {displayName, email }
            setUser(user)
          setLoggedInUser(singInUser)
          history.replace(from)
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          
          var email = error.email;
          console.log(errorCode, errorMessage,email)
          var credential = error.credential;
          // ...
        });

       

    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    return (
        <div>
          <h1 className="mt-5" id="brand">BD SHOP ❤</h1>
            <Container className="mt-5 App login">
            <Card>
              <Card.Body className="cardBody">
               <h2 className="text-center mb-4">Log in!</h2>
               <Button id="button" variant="secondary" onClick={handleGoogleSignIn}>Sign in with google <img src={image} alt=""/>  </Button>
              </Card.Body>
            </Card>
            </Container>
        </div>
           
    );
};

export default Login;