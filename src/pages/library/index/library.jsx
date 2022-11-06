import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Head from '../../../components/headlib/head'
import Foot from '../../../components/footlib/foot'

// import Beranda from '../componentLibrary/beranda/beranda';
// import LibraryInformation from '../componentLibrary/informasi/libraryInformation';
// import BeritaLibrary from '../componentLibrary/berita/beritaLibrary';
import LibraryHelp from '../componentLibrary/bantuan/LibraryHelp';

export default function Index() {
  return (
    <div className='index'>
      <Head />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route exact path='/' element={<LibraryHelp />} />
        </Routes>
      </Suspense>
      <Foot />
    </div>
  )
}
