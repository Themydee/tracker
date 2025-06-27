import React, { useState } from 'react';
import TrackingForm from './components/Tracker';
import ProgressReport from './components/progress';
import './styles/styles.css';

const App = () => {
  const [trackId, setTrackId] = useState('');
  const [status, setStatus] = useState(null);

  const handleTrackingIdSubmit = async (id) => {
    const trimmedId = id.trim();
    setTrackId(trimmedId);

    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ trackingId: trimmedId }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(null);
        alert(data?.error || 'Tracking ID not found');
        return;
      }

      setStatus(data.status);
    } catch (err) {
      console.error('Tracking fetch error:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="App">
      <h1>Tracking Status</h1>
      <TrackingForm onTrack={handleTrackingIdSubmit} />
      <ProgressReport statusData={status} />
    </div>
  );
};

export default App;
