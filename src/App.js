import React from 'react'
import Hero from './components/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyle />
      <Hero/>
      </Router>
    </div>
  );
}

export default App;
