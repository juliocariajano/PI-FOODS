import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
// import './App.css';
import DetailRecipe from "./components/DetailRecipe";
import CreateRecipe from "./components/CreateRecipe"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route exact path='/home/:id' element={<DetailRecipe/>}/>
        <Route exact path='/recipe' element ={<CreateRecipe/>}/>

      
    </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
