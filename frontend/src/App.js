//import {useState, useEffect} from "react"; 
// import backgroundImage from "./images/backgroundImage.jpg"
// const API_BASE = "http://localhost:5000"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey';
import Result from './pages/Result';


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/survey" element={<Survey />} />
      </Routes>
      <Routes>
          <Route path="/result" element={<Result />} />
      </Routes>
    </Router>

  );
}



export default App;
