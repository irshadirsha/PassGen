import React, { useState } from 'react';
import './home.css';
import CopyToClipboard from 'react-copy-to-clipboard'; // Import the CopyToClipboard component

function Home() {
  const [passwordLength, setPasswordLength] = useState(16);
  const [showmodal, setShowModal] = useState(false);
  const [complexity, setComplexity] = useState({
    uppercase: false,
    lowercase: true,
    numbers: true,
    special: false,
  });
  const [password, setPassword] = useState('');
  const [savepassword, setSavePassword] = useState([]);
  const [copied, setCopied] = useState(false); // State to track if the password is copied

  const handlePasswordLength = (e) => {
    setPasswordLength(e.target.value);
  };

  const toggleComplexity = (e) => {
    const option = e.target.id;
    setComplexity((prevComplexity) => ({
      ...prevComplexity,
      [option]: !prevComplexity[option],
    }));
  };

  const generatePassword = () => {
    let charset = '';
    if (complexity.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (complexity.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (complexity.numbers) charset += '0123456789';
    if (complexity.special) charset += '!@#$%^&*()_+[]{}|<>?';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  };

  const handleGeneratePasswordClick = () => {
    const generatedPassword = generatePassword();
    setPassword(generatedPassword);
  };

  const handlesave = () => {
    setSavePassword(password);
    setSavePassword([...savepassword, password]);
  };

  const handleview = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center text-xl font-mono text-white">
          Password Generator
        </h2>
        <div className="result">
          <div className="result__title field-title">Generated Password</div>
          <div className="result__info right">click to copy</div>
          <div className="result__info left">copied</div>
          <div className="result__viewbox" id="result">
            <h1 className="">{password ? password : "Strong Pass"}</h1>
          </div>
          {/* CopyToClipboard component to copy the password */}
          <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
            <button id="copy-btn" style={{ '--x': 0, '--y': 0 }}>
              <i className="far fa-copy"></i>
            </button>
          </CopyToClipboard>
          {copied && (
            <span className="ml-2 text-green-500">Copied to clipboard!</span>
          )}
        </div>
        <div className="length range__slider">
          <div className="length__title field-title">Length:</div>
          <input
            type="number"
            value={passwordLength}
            onChange={handlePasswordLength}
            className="border rounded-lg p-2 text-center outline-none"
            style={{ width: '300px', height: '30px' }}
          />
        </div>

        <div className="settings">
          <span className="settings__title field-title">settings</span>
          {/* ... (settings checkboxes code) */}
        </div>

        <button
          onClick={handleGeneratePasswordClick}
          className="btn generate"
          id="generate"
        >
          Generate Password
        </button>

        <div className="flex">
          <button onClick={handlesave} className="btn generate">
            save
          </button>
          <button onClick={handleview} className="btn generate">
            view
          </button>
        </div>
      </div>
      {/* ... (modal code) */}
    </div>
  );
}

export default Home;
