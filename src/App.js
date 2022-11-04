import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Components/Home';
import SinglePage from './Components/SinglePage';
import Error from './Components/Error';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from './Components/Pages/Navbar';

const App=()=> {

  return (
    <div>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='movie/:id' element={<SinglePage/>}/>
               <Route path='*' element={<Error/>}/>
            </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
