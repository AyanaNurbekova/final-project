import React, { useEffect, useState } from 'react';
import fire from '../fire';
export const authContext = React.createContext();

export const useAuth = () => {
  return React.useContext(authContext);
};

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [emailError, setEmailError]= useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };  


  const handleAddNew = () => {
    console.log(email,password)
    clearErrors();
    fire.auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((error) => {
      // eslint-disable-next-line default-case
      switch(error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password":
          setPasswordError(error.massage);
          break;  
       };
    });
  };

  const handleSignin= () => {
    clearErrors();
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error)=>{
      // eslint-disable-next-line default-case
      switch(error.code){
        case "auth/user-disabled":
        case "auth/invalid-email":
        case "auth/user-not-found":
          setEmailError(error.message);
          break;
        case "auth/wrong-password":
          setPasswordError(error.message);
          break;
      }
    })
  };


  const handleSignout = () => {
    fire.auth().signOut();
  };
  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
        if (user) {
            clearInputs();
            setUser(user);
        } else {
            setUser("");
        }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignin,
    handleSignout,
    handleAddNew,
};

  return (
     <authContext.Provider value={values}> {children} </authContext.Provider>
  );
};

export default AuthContextProvider;