// src/pages/BusDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Navigation, User, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { DEMO_BUSES } from '../data/mockData';

export default function BusDetails() {
  const { id } = useParams();
  const [bus, setBus] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const foundBus = DEMO_BUSES.find(b => b.id === id);
    setBus(foundBus);
  }, [id]);

  if (!bus) return <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>Loading...</div>;

  const isExistingGPS = bus.trackingMode.includes('Existing Bus GPS');

  const handleCopy = () => {
    navigator.clipboard.writeText(bus.busNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', maxWidth: '800px' }}>
      <Link to={`/?from=${bus.origin}&to=${bus.destination}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)', marginBottom: '1.5rem', fontWeight: '500' }}>
        <ArrowLeft size={18} /> Back to Route
      </Link>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <h1 className="h1" style={{ color: 'var(--brand-primary)', marginBottom: '0.25rem' }}>{bus.busNumber}</h1>
            <p className="subtitle">{bus.origin} → {bus.destination}</p>
          </div>
          <div style={{ padding: '0.5rem 1rem', borderRadius: '999px', backgroundColor: 'var(--status-on-time)', color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>
            {bus.status}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Driver</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}><User size={18} /> {bus.driverName}</p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Estimated Arrival</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}><Clock size={18} /> {bus.etaMinutes} Minutes</p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Current Location (Simulated)</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}><MapPin size={18} /> {bus.locationDesc}</p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Tracking Source</p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}><Navigation size={18} /> {bus.trackingMode}</p>
          </div>
        </div>

        {/* Action Area based on GPS Mode */}
        <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
          {isExistingGPS ? (
            <div>
              <h3 className="h2" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Track in MSRTC Aapli ST</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                This bus has an official GPS feed. Copy the bus number and use the "Track Your Bus" feature in the official MSRTC app.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={handleCopy} className="btn btn-secondary">
                  {copied ? <CheckCircle size={18} color="var(--brand-primary)" /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy Bus Number'}
                </button>
                <a href="https://play.google.com/store/apps/details?id=com.app.commuter" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Open Aapli ST <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="h2" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Driver Smartphone Fallback Active</h3>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                Official GPS is unavailable. Location is being updated via the Easy Bus Driver prototype app. 
                (Demo: In a real scenario, this would poll the driver's device coordinates).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}