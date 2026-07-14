import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const [status, setStatus] = useState('Coding backend, learning frontend');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Mini Profile</h1>
        <p className="app-instructions">
          Type a status message below to see it update live inside the card!
        </p>
        
        <div className="status-input-container">
          <label htmlFor="status-input" className="status-label">Update Status:</label>
          <input
            id="status-input"
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Type your current status..."
            className="status-input"
          />
        </div>
      </header>

      <main className="app-main">
        <ProfileCard 
          name="Prabhakar Lal" 
          bio="Java Spring Boot Developer" 
          status={status} 
        />
      </main>
    </div>
  );
}

export default App;
