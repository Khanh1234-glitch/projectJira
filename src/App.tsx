import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import LayoutLogin from './Pages/Auth/LayoutLogin';


function App() {
  return (
    <Routes>
      <Route path='/login' element={<LayoutLogin/>}/>
    </Routes>
  );
}

export default App;
