// src/pages/AdminPages.jsx
import { useState } from 'react';
import { Check, X, ShieldAlert } from 'lucide-react';

// Fake data for demonstration
const INITIAL_DRIVERS = [
  { id: 'drv-01', name: 'Ramesh Patil', phone: '9876543210', status: 'pending' },
  { id: 'drv-02', name: 'Sagar Shinde', phone: '9876543211', status: 'pending' },
];

export default function AdminPages() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS);

  const handleAuth = (e) => {
    e.preventDefault();
    setIsAdminLoggedIn(true);
  };

  const handleAction = (id, newStatus) => {
    setDrivers(drivers.map(d => d.id === id ? { ...d, status: newStatus } : d));
  };

  if (isAdminLoggedIn) {
    return (
      <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className="h1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={28} color="var(--brand-primary)" /> Admin Portal
          </h1>
          <button onClick={() => setIsAdminLoggedIn(false)} className="btn btn-secondary">Logout</button>
        </div>
        
        <div className="card">
          <h2 className="h2" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Pending Driver Approvals
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {drivers.filter(d => d.status === 'pending').length === 0 ? (
              <p className="text-muted" style={{ textAlign: 'center', padding: '2rem 0' }}>No pending requests.</p>
            ) : (
              drivers.filter(d => d.status === 'pending').map(driver => (
                <div key={driver.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '0.5rem', backgroundColor: 'var(--bg-primary)' }}>
                  <div>
                    <p style={{ fontWeight: '600' }}>{driver.name}</p>
                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>ID: {driver.id} | Ph: {driver.phone}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => handleAction(driver.id, 'approved')} className="btn" style={{ padding: '0.5rem', backgroundColor: 'var(--status-on-time)', color: 'white' }} title="Approve">
                      <Check size={18} />
                    </button>
                    <button onClick={() => handleAction(driver.id, 'rejected')} className="btn" style={{ padding: '0.5rem', backgroundColor: 'var(--status-rejected)', color: 'white' }} title="Reject">
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <h2 className="h2" style={{ fontSize: '1.25rem', marginTop: '2.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Actioned Drivers
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
             {drivers.filter(d => d.status !== 'pending').map(driver => (
               <div key={driver.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '0.5rem' }}>
                 <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{driver.name}</span>
                 <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: driver.status === 'approved' ? 'var(--status-on-time)' : 'var(--status-rejected)', textTransform: 'uppercase' }}>
                   {driver.status}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '400px' }}>
      <div className="card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <ShieldAlert size={40} color="var(--brand-primary)" style={{ marginBottom: '0.5rem' }} />
          <h1 className="h2" style={{ margin: 0 }}>Admin Login</h1>
        </div>
        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Admin Username</label>
            <input type="text" defaultValue="admin" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Password</label>
            <input type="password" defaultValue="admin123" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
            Login to Portal
          </button>
        </form>
      </div>
    </div>
  );
}