import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';
import GlobalStyle from './styles/style';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
}

export default App;
