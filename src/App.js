import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Courses from './components/Courses';
import CourseState from './context/courses/CourseState';
import NewsEventState from './context/news_events/NewsEventState';
import MncInfo from './components/MncInfo';
import News from './components/News';
import Students from './components/Students';
import Footer from './components/Footer';
import Alumni from './components/Alumni';
import Amc from './components/Amc';
import GetCourse from './components/GetCourse';
import StudentState from './context/students/StudentState';


function App() {
  let { id } = useParams();
  return (
    <>
      <div className='fix-width'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <NewsEventState>
                <Home />
              </NewsEventState>
            } />
            <Route path='/news' element={
              <NewsEventState>
                <News />
              </NewsEventState>
            } />

            <Route path="/course" element={
              <CourseState>
                <Courses />
              </CourseState>
            } />
            <Route path="/course/:id" element={
              <CourseState>
                <GetCourse />
              </CourseState>
            } />
            <Route path="/info" element={<MncInfo />} />
            <Route path="/students" element={
              <StudentState>
                <Students />
              </StudentState>
            } />
            <Route path="/alumni" element={
              <StudentState>
                <Alumni />
              </StudentState>
            } />
            <Route path="/amc" element={<Amc />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
