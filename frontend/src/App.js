import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Courses from './components/Courses';
import CourseState from './context/courses/CourseState';


function App() {
  return (
    <>
      <div className='fix-width'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/course" element={
              <CourseState>
                <Courses />
              </CourseState>
            } />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
