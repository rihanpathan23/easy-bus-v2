// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowDownUp } from 'lucide-react';
import LocationSearch from '../components/LocationSearch';
import BusCard from '../components/BusCard';
import { getBusesForRoute } from '../data/mockData';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [from, setFrom] = useState(searchParams.get('from') || 'Sangamner');
  const [to, setTo] = useState(searchParams.get('to') || 'Kopargaon');
  const [buses, setBuses] = useState([]);

  // Sync state and fetch buses whenever from/to changes
  useEffect(() => {
    // Update URL parameters
    if (from && to) {
      setSearchParams({ from, to });
    } else {
      setSearchParams({});
    }

    // Fetch data
    const results = getBusesForRoute(from, to);
    setBuses(results);
  }, [from, to, setSearchParams]);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 1.5rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: 'var(--brand-primary)', color: 'white', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            College Innovation Prototype
          </div>
          <h1 className="h1">Know Your Bus Before You Wait.</h1>
          <p className="subtitle" style={{ marginBottom: '2.5rem' }}>Search by route, discover listed buses and check their tracking options.</p>
          
          {/* Search Box */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              {/* Flex row on desktop, column on mobile. Using inline styles for quick layout */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <LocationSearch label="Starting Point" value={from} onChange={setFrom} placeholder="Select origin" excludeValue={to} />
                </div>
                
                <button onClick={handleSwap} className="btn btn-secondary" style={{ padding: '0.75rem', height: 'fit-content', borderRadius: '50%' }} aria-label="Swap route">
                  <ArrowDownUp size={20} />
                </button>
                
                <div style={{ flex: '1 1 200px' }}>
                  <LocationSearch label="Destination" value={to} onChange={setTo} placeholder="Select destination" excludeValue={from} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Route-first discovery</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Existing GPS integration</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✓ Driver smartphone fallback</span>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container" style={{ padding: '3rem 1.5rem' }}>
        <h2 className="h2" style={{ marginBottom: '2rem' }}>
          {from && to ? `Buses from ${from} to ${to}` : 'Select a route to view buses'}
        </h2>

        {from && to && buses.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <p className="text-muted" style={{ marginBottom: '1rem' }}>No demonstration buses are listed for this route.</p>
            <button onClick={() => {setFrom(''); setTo('');}} className="btn btn-secondary">Change Route</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {buses.map(bus => (
              <BusCard key={bus.id} bus={bus} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}