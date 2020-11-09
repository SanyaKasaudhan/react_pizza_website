import React from 'react'
import Hero from './components/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Products from './components/Products'
import { productData } from './components/Products/data';

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyle />
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      </Router>
    </div>
  );
}

export default App;
