import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Achievement from './components/Achievement';
import AmcState from './context/amc/AmcState';
import Login from './components/Login';
import Admin from './components/Admin';
import NewsByID from './components/NewsByID';
import GeneralState from './context/general/GeneralState';
import { CookiesProvider } from 'react-cookie';


function App() {

  // const cookies = withCoo
  return (
    <>
      <CookiesProvider>
        <div className='fix-width'>
          <GeneralState>
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
                <Route path="/news/:id" element={
                  <NewsEventState>
                    <NewsByID />
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
                <Route path="/achievement" element={
                  <Achievement />
                } />
                <Route path="/amc" element={
                  <AmcState>
                    <Amc />
                  </AmcState>
                } />
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
