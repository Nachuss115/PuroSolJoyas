import React from 'react';
import Productos from './componentes/Productos';
import './App.css';
import Navbar from './componentes/Navbar';
import Products from './componentes/Products';
import CheckoutPage from './componentes/CheckoutPage';
import CheckoutCard from './componentes/CheckoutCard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from './componentes/Signin';
import SignUp from './componentes/Signup';
import {useEffect} from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import Checkout from './componentes/CheckoutForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])



  return (
    <Router>
          <div className="App">
     <Navbar/>
     {/*<CheckoutPage/>*/}

     <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/checkout-page" element={<CheckoutPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/" element={<Products/>} />
     </Routes>    
    </div>

    </Router>

  );
}

export default App;
