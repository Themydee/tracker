import React from 'react';

const ProgressReport = ({ statusData }) => {
  return (
    <div className="progress-report">
      <h2>Tracking Status Page</h2>
      {statusData ? (
        <div>
          <h3>Status: {statusData.status}</h3>
          <h4>Progress Steps:</h4>
          <ul>
            {statusData.progress.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tracking information available. Please enter a valid tracking ID.</p>
      )}
    </div>
  );
};

export default ProgressReport;
