import React,{useState} from 'react';
import './home.css';
import CopyToClipboard from 'react-copy-to-clipboard';
function Home() {
    const [passwordLength, setPasswordLength] = useState(16); 
    const [showmodal,setShowModal]=useState(false)
    const [complexity, setComplexity] = useState({
        uppercase: false,
        lowercase: true,
        numbers: true,
        special: false,
      });
      const [password,setPassword]=useState('')
      const [savepassword,setSavePassword]=useState([])

      
      const [copied, setCopied] = useState(false);

        const handleCopyToClipboard = () => {
        setCopied(true);
        setTimeout(() => {
        setCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
    };

    const handlePasswordLength=(e)=>{
        setPasswordLength(e.target.value)
    }
    console.log(passwordLength)

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
    console.log(generatedPassword);
    setPassword(generatedPassword)
  };

  const handlesave=()=>{
    setSavePassword(password)
    setSavePassword([...savepassword, password]);
}
console.log(savepassword);

const handleview=()=>{
     setShowModal(true)
}  

return (
    <div>
      <div className="container">
        <h2 className="text-center text-xl font-mono text-white">Password Generator</h2>
        <div className="result">
          <div className="result__title field-title">Generated Password</div>
          <div className="result__info right">click to copy</div>
          <div className="result__info left">copied</div>
          <div className="result__viewbox" id="result">
          <h1 className=''>{password ? password : "Strong Pass"}</h1>
          </div>
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
  <div className="length__title field-title">
    Length:
  </div>
  <input
    type="number"
    value={passwordLength}
    onChange={handlePasswordLength}
    className="border rounded-lg p-2 text-center outline-none"
    style={{ width: '300px', height:'30px' }}
  />
</div>

         

        <div className="settings">
          <span className="settings__title field-title">settings</span>
          <div className="setting">
          <input
              type="checkbox"
              id="uppercase"
              checked={complexity.uppercase}
              onChange={toggleComplexity}
            />
            <label htmlFor="uppercase">Include Uppercase</label>
          </div>
          <div className="setting">
          <input
              type="checkbox"
              id="lowercase"
              checked={complexity.lowercase}
              onChange={toggleComplexity}
            />
            <label htmlFor="lowercase">Include Lowercase</label>
          </div>
          <div className="setting">
          <input
              type="checkbox"
              id="numbers"
              checked={complexity.numbers}
              onChange={toggleComplexity}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="setting">
          <input
              type="checkbox"
              id="special"
              checked={complexity.special}
              onChange={toggleComplexity}
            />
            <label htmlFor="special">Include Symbols</label>
          </div>
        </div>

        <button onClick={handleGeneratePasswordClick} className="btn generate" id="generate">
          Generate Password
        </button>
    
        <div className='flex '>
             <button onClick={handlesave}
               className='btn generate'>save</button>
             <button onClick={handleview}
              className='btn generate'>view</button>
        </div>
      </div>
      {/* //////////////////////////// */}
     {showmodal && <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
  <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6">
    <div className="flex justify-between items-center mb-4">
      <h5 className="text-xl font-semibold text-gray-800">Saved Passwords</h5>
    </div>
    <div className="text-center">
  {savepassword.map((item, index) => (
    <h1 key={index}>{item}</h1>
  ))}
</div>

    <div className="flex justify-end">
      
      <button
        type="button"
        className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition ease-in-out"
         onClick={()=>setShowModal(false)}
      >
        Close
      </button>
    </div>
  </div>
</div> }
{/* ////////////////////////////////// */}

    </div>
  );
}

export default Home;




// import React,{useState} from 'react';
// import './home.css';

// function Home() {
//     const [passwordLength, setPasswordLength] = useState(16); 
//     const [showmodal,setShowModal]=useState(false)
//     const [complexity, setComplexity] = useState({
//         uppercase: false,
//         lowercase: true,
//         numbers: true,
//         special: false,
//       });
//       const [password,setPassword]=useState('')
//       const [savepassword,setSavePassword]=useState([])
//     const handlePasswordLength=(e)=>{
//         setPasswordLength(e.target.value)
//     }
//     console.log(passwordLength)

//     const toggleComplexity = (e) => {
//         const option = e.target.id;
//         setComplexity((prevComplexity) => ({
//           ...prevComplexity,
//           [option]: !prevComplexity[option],
//         }));
//       };

//     const generatePassword = () => {
//         let charset = '';
//         if (complexity.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         if (complexity.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
//         if (complexity.numbers) charset += '0123456789';
//         if (complexity.special) charset += '!@#$%^&*()_+[]{}|<>?';
    
//         let password = '';
//         for (let i = 0; i < passwordLength; i++) {
//           const randomIndex = Math.floor(Math.random() * charset.length);
//           password += charset.charAt(randomIndex);
//         }
//         return password;
//       };

//        const handleGeneratePasswordClick = () => {
//     const generatedPassword = generatePassword();
//     console.log(generatedPassword);
//     setPassword(generatedPassword)
//   };

//   const handlesave=()=>{
//     setSavePassword(password)
//     setSavePassword([...savepassword, password]);
// }
// console.log(savepassword);

// const handleview=()=>{
//      setShowModal(true)
// }  

// return (
//     <div>
//       <div className="container">
//         <h2 className="text-center text-xl font-mono text-white">Password Generator</h2>
//         <div className="result">
//           <div className="result__title field-title">Generated Password</div>
//           <div className="result__info right">click to copy</div>
//           <div className="result__info left">copied</div>
//           <div className="result__viewbox" id="result">
//           <h1 className=''>{password ? password : "Strong Pass"}</h1>

//           </div>
//           <button id="copy-btn" style={{ '--x': 0, '--y': 0 }}>
//             <i className="far fa-copy"></i>
//           </button>
//         </div>
//         <div className="length range__slider">
//   <div className="length__title field-title">
//     Length:
//   </div>
//   <input
//     type="number"
//     value={passwordLength}
//     onChange={handlePasswordLength}
//     className="border rounded-lg p-2 text-center outline-none"
//     style={{ width: '300px', height:'30px' }}
//   />
// </div>

         

//         <div className="settings">
//           <span className="settings__title field-title">settings</span>
//           <div className="setting">
//           <input
//               type="checkbox"
//               id="uppercase"
//               checked={complexity.uppercase}
//               onChange={toggleComplexity}
//             />
//             <label htmlFor="uppercase">Include Uppercase</label>
//           </div>
//           <div className="setting">
//           <input
//               type="checkbox"
//               id="lowercase"
//               checked={complexity.lowercase}
//               onChange={toggleComplexity}
//             />
//             <label htmlFor="lowercase">Include Lowercase</label>
//           </div>
//           <div className="setting">
//           <input
//               type="checkbox"
//               id="numbers"
//               checked={complexity.numbers}
//               onChange={toggleComplexity}
//             />
//             <label htmlFor="numbers">Include Numbers</label>
//           </div>
//           <div className="setting">
//           <input
//               type="checkbox"
//               id="special"
//               checked={complexity.special}
//               onChange={toggleComplexity}
//             />
//             <label htmlFor="special">Include Symbols</label>
//           </div>
//         </div>

//         <button onClick={handleGeneratePasswordClick} className="btn generate" id="generate">
//           Generate Password
//         </button>
    
//         <div className='flex '>
//              <button onClick={handlesave}
//                className='btn generate'>save</button>
//              <button onClick={handleview}
//               className='btn generate'>view</button>
//         </div>
//       </div>
//       {/* //////////////////////////// */}
//      {showmodal && <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
//   <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6">
//     <div className="flex justify-between items-center mb-4">
//       <h5 className="text-xl font-semibold text-gray-800">Saved Passwords</h5>
//     </div>
//     <div className="text-center">
//   {savepassword.map((item, index) => (
//     <h1 key={index}>{item}</h1>
//   ))}
// </div>

//     <div className="flex justify-end">
      
//       <button
//         type="button"
//         className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition ease-in-out"
//          onClick={()=>setShowModal(false)}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// </div> }
// {/* ////////////////////////////////// */}

//     </div>
//   );
// }

// export default Home;






// <div className="support">
// <a href="https://twitter.com/DevLoop01" target="_blank">
//   <i className="fab fa-twitter-square"></i>
// </a>
// <a href="https://codepen.io/dev_loop/" target="_blank">
//   <i className="fab fa-codepen"></i>
// </a>
// </div>

  
{/* <a
className="github-corner"
href="https://github.com/devloop01/password-generator"
title="Fork me on GitHub"
target="_blank"
>
<svg width="80" height="80" viewBox="0 0 250 250">
  <title>Fork me on GitHub</title>
  <path d="M0 0h250v250" />
  <path
    className="octo-arm"
    d="M127.4 110c-14.6-9.2-9.4-19.5-9.4-19.5 3-7 1.5-11 1.5-11-1-6.2 3-2 3-2 4 4.7 2 11 2 11-2.2 10.4 5 14.8 9 16.2"
    fill="currentColor"
    style={{ transformOrigin: '130px 110px' }}
  />
  <path
    className="octo-body"
    d="M113.2 114.3s3.6 1.6 4.7.6l15-13.7c3-2.4 6-3 8.2-2.7-8-11.2-14-25 3-41 4.7-4.4 10.6-6.4 16.2-6.4.6-1.6 3.6-7.3 11.8-10.7 0 0 4.5 2.7 6.8 16.5 4.3 2.7 8.3 6 12 9.8 3.3 3.5 6.7 8 8.6 12.3 14 3 16.8 8 16.8 8-3.4 8-9.4 11-11.4 11 0 5.8-2.3 11-7.5 15.5-16.4 16-30 9-40 .2 0 3-1 7-5.2 11l-13.3 11c-1 1 .5 5.3.8 5z"
    fill="currentColor"
  />
</svg>
</a> */}