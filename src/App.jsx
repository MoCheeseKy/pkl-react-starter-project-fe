import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Daftar from './pages/daftar/daftar';
import Subscribe from './components/footer/subscribe/subscribe';


function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/daftar' element={<Daftar />} />
        <Route exact path='/tes' element={<Subscribe />} />
        <Route path="*" element={<center><h1>Cannot Found the URL !</h1></center>}/>
      </Routes>
    </Suspense>
  );
}



export default App;
