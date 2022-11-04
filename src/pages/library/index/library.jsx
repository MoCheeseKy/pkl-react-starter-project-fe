import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Head from '../../../components/headlib/head'
import Foot from '../../../components/footlib/foot'

import Beranda from '../componentLibrary/beranda/beranda';

export default function Index() {
  return (
    <div className='index'>
      <Head />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route exact path='/' element={<Beranda />}></Route>
        </Routes>
      </Suspense>
      <Foot />
    </div>
  )
}
