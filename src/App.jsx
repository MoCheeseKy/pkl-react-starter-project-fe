import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Daftar from './pages/daftar/daftar';
import Graduates from './pages/graduates/graduates';
import Undergraduates from './pages/undergraduates/undergraduates';
import Partners from './pages/partners/partners';
import Alumni from './pages/alumni/alumni';
import Academic from './pages/academic/academic';
import Elibrary from './pages/e-library/e-library';
import Library from './pages/library/library';
import Admission from './pages/admission/admission';

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/daftar' element={<Daftar />} />
        <Route exact path='/graduates' element={<Graduates />} />
        <Route exact path='/undergraduates' element={<Undergraduates />} />
        <Route exact path='/alumni' element={<Alumni />} />
        <Route exact path='/academic' element={<Academic />} />
        <Route exact path='/partners' element={<Partners />} />
        <Route exact path='/e-library' element={<Elibrary />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/admission' element={<Admission />} />
        <Route path="*" element={
          <center>
            <h1>Oops! That page can’t be found.</h1>
            <p>It looks like nothing was found at this location. Maybe try other link ?</p>
          </center>
        } />
      </Routes>
    </Suspense>
  );
}



export default App;
