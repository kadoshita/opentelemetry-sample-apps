import React, { useState } from 'react';
import './App.css';

export function App() {
  const [response, setResponse] = useState();

  const sendRequest = async () => {
    const response = await fetch('http://localhost:3000/');
    const json = await response.json();
    setResponse(json);
  };

  return (
    <div>
      <h1>App</h1>
      <div>
        <button onClick={sendRequest}>Send Request</button>
      </div>
      <div>
        <textarea rows={30} value={JSON.stringify(response, null, 2)} readOnly={true} />
      </div>
    </div>
  );
}
