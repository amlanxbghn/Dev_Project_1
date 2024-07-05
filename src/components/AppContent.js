import React from 'react';
import './AppContent.css';

const AppContent = ({
  text,
  setText,
  convertFrom,
  setConvertFrom,
  convertTo,
  setConvertTo,
  handleSubmit,
  result
}) => {
  const options = ['Linkedin Post', 'Twitter Post', 'Article', 'Video Script'];

  return (
    <div className="AppContent">
      <h1>Cross Platform Content Diversification Tool.</h1>
      <h4>Bridge Platforms Seamlessly. Empower your Presence Everywhere.</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Convert From:</label>
          <select value={convertFrom} onChange={(e) => setConvertFrom(e.target.value)}>
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Convert To:</label>
          <select value={convertTo} onChange={(e) => setConvertTo(e.target.value)}>
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
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
};

export default AppContent;
