// src/components/BusCard.jsx
import { Clock, MapPin, Navigation, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusCard({ bus }) {
  // Determine status color based on CSS variables
  const getStatusColor = (status) => {
    if (status.includes('Delayed')) return 'var(--status-delayed)';
    if (status === 'On Time') return 'var(--status-on-time)';
    return 'var(--status-pending)';
  };

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }} 
         onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
         onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      
      {/* Header: Bus Number & Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 className="h2" style={{ margin: 0, color: 'var(--brand-primary)' }}>{bus.busNumber}</h3>
          <p className="text-muted" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
            <User size={14} /> Driver: {bus.driverName}
          </p>
        </div>
        <div style={{ 
          padding: '0.25rem 0.75rem', 
          borderRadius: '999px', 
          fontSize: '0.75rem', 
          fontWeight: '600',
          backgroundColor: `${getStatusColor(bus.status)}20`,
          color: getStatusColor(bus.status),
          border: `1px solid ${getStatusColor(bus.status)}40`
        }}>
          {bus.status}
        </div>
      </div>

      {/* Grid Data */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div>
          <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>ETA</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', fontSize: '1.125rem' }}>
            <Clock size={18} color="var(--brand-primary)" /> {bus.etaMinutes} mins
          </p>
        </div>
        <div>
          <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Tracking Source</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <Navigation size={16} color="var(--text-secondary)" />
            {bus.trackingMode.split(' — ')[0]}
          </p>
        </div>
      </div>

      {/* Footer: Location & Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
          <MapPin size={16} color="var(--text-secondary)" style={{ flexShrink: 0 }} />
          <p className="text-muted" style={{ fontSize: '0.875rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {bus.locationDesc}
          </p>
        </div>
        
        {/* Placeholder link for next batch */}
        <Link to={`/bus/${bus.id}`} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}