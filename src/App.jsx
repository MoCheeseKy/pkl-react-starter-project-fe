import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Daftar from './pages/daftar/daftar';
import Academic from './pages/academic/academic';

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/daftar' element={<Daftar />} />
        <Route exact path='/academic' element={<Academic />} />
        <Route path="*" element={
        <center>
          <h1>Oops! That page can’t be found.</h1>
          <p>It looks like nothing was found at this location. Maybe try other link ?</p>
        </center>
        }/>
      </Routes>
    </Suspense>
  );
}



export default App;
