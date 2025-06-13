import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Surf Camp Hostel!</h1>
        <p>Your ultimate destination for waves, sun, and fun.</p>
        {/* Placeholder for AI-generated surfing image */}
        <div style={{ marginTop: '20px', border: '1px dashed #ccc', padding: '20px', width: '300px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>[AI-Generated Surfing Image Placeholder]</p>
        </div>
        <p style={{marginTop: '30px'}}>Book your stay and classes soon!</p>
      </header>
    </div>
  );
}

export default App;
