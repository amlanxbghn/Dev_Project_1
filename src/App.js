import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [convertFrom, setConvertFrom] = useState('');
  const [convertTo, setConvertTo] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `Your prompt here: ${text}, ${convertFrom}, ${convertTo}, Your prompt here`;

    try {
      const response = await axios.post('YOUR_GEMINI_API_ENDPOINT', {
        prompt: prompt
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error fetching data from API', error);
    }
  };

  return (
    <div className="App">
      <h1>Cross Platform Diversification Tool</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Convert From:</label>
          <input
            type="text"
            value={convertFrom}
            onChange={(e) => setConvertFrom(e.target.value)}
          />
        </div>
        <div>
          <label>Convert To:</label>
          <input
            type="text"
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      {result && (
        <div>
          <h2>Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;

