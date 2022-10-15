import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { ListRoutes } from "./routes/index";
import './App.scss';

function App() {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>

      </Routes>
    </Suspense>
  );
}



export default App;
