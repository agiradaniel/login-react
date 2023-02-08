import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from './pages/Registration'
import Main from './pages/Main';

function App() {
 
 
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/registration' render={(props) => <Registration/>} element={<Registration/>}/>
        <Route path='/main' render={(props) => <Main/>} element={<Main/>}/>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
