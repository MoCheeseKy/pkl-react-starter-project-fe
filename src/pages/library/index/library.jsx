import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

// import Beranda from '../componentLibrary/beranda/beranda';
// import LibraryInformation from '../componentLibrary/informasi/libraryInformation';
// import BeritaLibrary from '../componentLibrary/berita/beritaLibrary';
// import LibraryHelp from '../componentLibrary/bantuan/LibraryHelp';
import Login from '../componentLibrary/login/Login';

export default function Index() {
  return (
    <div className='index'>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  )
}
