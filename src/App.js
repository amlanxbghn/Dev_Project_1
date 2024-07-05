import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import AppContent from './components/AppContent';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [convertFrom, setConvertFrom] = useState('');
  const [convertTo, setConvertTo] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `prompt: ${text}, ${convertFrom}, ${convertTo},prompt`;

    try {
      const response = await axios.post('https://api.gemini.com/v1/convert', {
        prompt: prompt
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error fetching data from API', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <AppContent
        text={text}
        setText={setText}
        convertFrom={convertFrom}
        setConvertFrom={setConvertFrom}
        convertTo={convertTo}
        setConvertTo={setConvertTo}
        handleSubmit={handleSubmit}
        result={result}
      />
    </div>
  );
}

export default App; 