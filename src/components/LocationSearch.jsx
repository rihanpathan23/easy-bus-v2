// src/components/LocationSearch.jsx
import { useState, useRef, useEffect } from 'react';
import { MapPin, X } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';

export default function LocationSearch({ label, value, onChange, placeholder, excludeValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter locations based on search term and exclude the other selected location
  const filteredLocations = LOCATIONS.filter(loc => 
    loc.toLowerCase().includes(searchTerm.toLowerCase()) &&
    loc !== excludeValue
  );

  const handleSelect = (location) => {
    onChange(location);
    setSearchTerm('');
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation(); // Prevent opening dropdown
    onChange('');
    setSearchTerm('');
  };

  return (
    <div className="location-search-wrapper" ref={wrapperRef} style={{ position: 'relative', width: '100%' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
        {label}
      </label>
      
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          cursor: 'pointer',
          transition: 'border-color 0.2s'
        }}
      >
        <MapPin size={18} color="var(--brand-primary)" style={{ marginRight: '0.75rem' }} />
        
        {isOpen ? (
          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
        ) : (
          <span style={{ flex: 1, color: value ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {value || placeholder}
          </span>
        )}

        {value && (
          <button 
            onClick={handleClear}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '0.5rem',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc) => (
              <div
                key={loc}
                onClick={() => handleSelect(loc)}
                style={{
                  padding: '0.75rem 1rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {loc}
              </div>
            ))
          ) : (
            <div style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
              No matching locations
            </div>
          )}
        </div>
      )}
    </div>
  );
}