import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/Form";




function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Form />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;