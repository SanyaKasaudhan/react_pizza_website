import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyle />
      <Navbar/>
      </Router>
    </div>
  );
}

export default App;
