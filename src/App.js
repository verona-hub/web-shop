import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

import Items from './components/Products/Items';


const App = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <Items />
          </div>
      </BrowserRouter>
  );
};


export default App;


