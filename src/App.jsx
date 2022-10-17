import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';


function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Suspense>
  );
}



export default App;
