import React, { useState } from "react";

const Tracker = ({ onTrack }) => {
  const [trackId, setTrackId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackId) {
      onTrack(trackId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="trackId">Enter Your Tracking ID:</label>
      <input
        type="text"
        id="trackId"
        value={trackId}
        onChange={(e) => setTrackId(e.target.value)}
        required
      />
      <button type="submit">Track</button>
    </form>
  );
};

export default Tracker;
