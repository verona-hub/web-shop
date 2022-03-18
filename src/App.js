import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Items from './components/Products/Items';
import Navbar from './components/Navbar';


const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Items />
          </div>
      </BrowserRouter>
  );
};


export default App;


