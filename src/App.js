import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

//toast
import {ToastContainer} from "react-toastify";
import"react-toastify/dist/ReactToastify.min.css";

//firebase 
import firebase from "firebaseapp";
import "firebase/auth";

//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Pagenotfound from "./Pages/Pagenotfound";
import { UserContext } from "./context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import firebaseconfig from "./config/FirebaseConfig";
//init firebase
firebase.initializeApp();

const App = () =>{

const [user,setUser] = useState(null); 
  return (
    <Router>
    <ToastContainer />
    <UserContext.Provider value={{user, setUser}}>
      <Header />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path= "Signin"component={Signin} />
    <Route exact path="Signup" component={Signup} />
    <Route exact path="*" component={Pagenotfound} />
    </Switch>
    <Footer />
    </UserContext.Provider>
    </Router>
  );
}
export default App;
