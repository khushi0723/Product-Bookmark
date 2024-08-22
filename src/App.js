//import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Products from './components/Products';
import Bookmarks from './components/Bookmarks';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="tabs">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-tab' : 'tab'}>
            Products
          </NavLink>
          <NavLink to="/bookmarks" className={({ isActive }) => isActive ? 'active-tab' : 'tab'}>
            Bookmarks
          </NavLink>
        </nav>

        <div className="tab-content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;