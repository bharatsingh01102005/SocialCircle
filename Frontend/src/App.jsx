import React from "react";
import { Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
function App(){
  return(
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>

    </Routes>
   
  )
}

export default App