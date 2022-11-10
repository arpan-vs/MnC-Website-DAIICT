import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from './components/Courses';
import MncInfo from './components/MncInfo';
import News from './components/News';
import Students from './components/Students';
import Footer from './components/Footer';
import Alumni from './components/Alumni';
import Amc from './components/Amc';
import Achievement from './components/Achievement';
import Login from './components/Login';
import Admin from './components/Admin';
import NewsByID from './components/NewsByID';
import GeneralState from './context/general/GeneralState';
import { CookiesProvider } from 'react-cookie';


function App() {

  return (
    <>
      <CookiesProvider>
        <div className='fix-width'>
          <GeneralState>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/news' element={<News />} />
                <Route path="/news/:id" element={<NewsByID />} />

                <Route path="/course" element={<Courses />} />

                <Route path="/info" element={<MncInfo />} />

                <Route path="/students" element={<Students />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/achievement" element={
                  <Achievement />
                } />
                <Route path="/amc" element={<Amc />} />
                
                <Route path="/login" element={
                  <Login />
                } />
                <Route path="/admin" element={
                  <Admin />
                } />
              </Routes>
            </Router>
            <Footer />
          </GeneralState>
        </div>
      </CookiesProvider>
    </>
  );
}

export default App;
