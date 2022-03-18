import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Items from './components/Products/Items';


const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              My App
              <Items />
          </div>
      </BrowserRouter>
  );
};


export default App;


