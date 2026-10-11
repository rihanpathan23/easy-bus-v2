// src/pages/DriverPages.jsx
import { useState } from 'react';

export default function DriverPages() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className="h1">Driver Dashboard</h1>
          <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        </div>
        
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 className="h2" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Start a Demo Trip</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Bus Number</label>
              <input type="text" placeholder="e.g. MH-17-AB-1234" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Route</label>
              <input type="text" placeholder="e.g. Sangamner to Kopargaon" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => alert("Trip started in demo mode!")}>
              Start Smartphone GPS Fallback
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '400px' }}>
      <div className="card">
        <h1 className="h2" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {isRegistering ? 'Driver Registration' : 'Driver Login'}
        </h1>
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isRegistering && (
             <div>
               <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Full Name</label>
               <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
             </div>
          )}
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Phone Number or ID</label>
            <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Password</label>
            <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            {isRegistering ? 'Register Request' : 'Login'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={() => setIsRegistering(!isRegistering)} style={{ background: 'none', border: 'none', color: 'var(--brand-primary)', cursor: 'pointer', fontSize: '0.875rem' }}>
            {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
          </button>
        </div>
      </div>
    </div>
  );
}