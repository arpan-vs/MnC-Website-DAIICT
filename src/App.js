import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className='fix-width'>
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
