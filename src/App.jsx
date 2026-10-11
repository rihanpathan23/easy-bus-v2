// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Bus } from 'lucide-react';
import './index.css';
import Home from './pages/Home';
import BusDetails from './pages/BusDetails';
import DriverPages from './pages/DriverPages';
import AdminPages from './pages/AdminPages'; // Naya import

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="container nav-container">
            <Link to="/" className="nav-brand">
              <Bus size={24} />
              Easy Bus
            </Link>
            
            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/driver" className="nav-link">Driver Portal</Link>
              <Link to="/admin" className="nav-link">Admin Portal</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bus/:id" element={<BusDetails />} />
            <Route path="/driver" element={<DriverPages />} />
            <Route path="/admin" element={<AdminPages />} />
          </Routes>
        </main>

        {/* Footer with Disclosure */}
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', marginTop: 'auto', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <p className="text-muted" style={{ fontSize: '0.875rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <strong>Demonstration Prototype</strong> — Easy Bus is an academic innovation prototype. Bus information, drivers, locations and ETA values may be simulated. Easy Bus is not officially affiliated with MSRTC. Real integration would require authorized data access and appropriate collaboration.
            </p>
          </div>
        </footer>
        
      </div>
    </Router>
  );
}

export default App;