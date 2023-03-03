import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Players from './components/Players';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about/" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
