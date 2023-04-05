import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Singers from './components/Singers';
import Albums from './components/Albums';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/singers">Singers</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singers" element={<Singers />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
