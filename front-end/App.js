

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Post_Job from './components/Post_Job';
import Apply from './components/Apply';
import Form from './components/Form';
import Logout from './components/Logout';



import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateComponents from './components/PrivateComponents';

 
function App() {
  
  const verify=localStorage.getItem('user');

  return(
    <Router>
    <div>
         <Header></Header>

         <Routes>

         <Route element={<PrivateComponents/>}>

          <Route path='/' element={<Home/>}/>
          <Route path='/Post_Job' element={<Post_Job/>}/>
          <Route path='/Apply' element={<Apply/>}/>
           <Route path='/Form' element={<Form/>}/> 
          <Route path='/Logout' element={<Logout/>}/>

          </Route>

          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>

         </Routes>
    </div>
    </Router>
   

  );


}


export default App;






