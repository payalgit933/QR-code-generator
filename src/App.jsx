import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if(word) {
      setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}`);
    }
    
  }, [word]);

  const handleClick = () => {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <div>
          <input type="text" 
            value={temp}
            onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text to encode" />

          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>

      <div className="output-box">
        {qrCode &&
          <img src={qrCode} alt="QR CODE" />
        }
      </div>
    </div>
  );
}

export default App; 