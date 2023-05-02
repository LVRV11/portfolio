import './styles/main.css';
import Navbar from './components/navbar/Navbar';
import ProjectAdd from './pages/ProjectAdd';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




// import React from 'react';

function App() {
	return (
    <div className="App">
        <Router>
		        <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/projectAdd' element={<ProjectAdd />} />
            </Routes>
            <Footer />
        </Router>
	  </div>
  );
}

export default App;


