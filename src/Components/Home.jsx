import React,{useState} from 'react';
import './home.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [passwordLength, setPasswordLength] = useState(16); 
    const [showmodal,setShowModal]=useState(false)
    const [passwordGenerated, setPasswordGenerated] = useState(false);
    const [isComplexitySelected, setIsComplexitySelected] = useState(false);

    const [complexity, setComplexity] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        special: false,
      });
      const [password,setPassword]=useState('')
      const [savepassword,setSavePassword]=useState([])

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
        setIsComplexitySelected(true);
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
        if (!isComplexitySelected) {
          toast.warning("Please select at least one constraint");
          return;
        }
    const generatedPassword = generatePassword();
    console.log(generatedPassword);
    setPassword(generatedPassword)
    setPasswordGenerated(true);
  };

  const handlesave = () => {
    if (passwordGenerated) {
    if (!savepassword.includes(password)) {
      setSavePassword([...savepassword, password]);
      toast.success("Password saved");
    } else {
      toast.warning("Password already exists");
    }
  }else{
    toast.error("No password generated to save");
  }
}
console.log(savepassword);

const handleview=()=>{
     setShowModal(true)
}  
const handleCopyToClipboard = () => {
  if(passwordGenerated){
    navigator.clipboard.writeText(password);
    toast.success("copied to clipboard")
  }else{
    toast.warning("please generate password")
  }
};
const removepassword=()=>{
  setSavePassword([])
  toast.success("Password deleted")
  closemodal()
}
const closemodal=()=>{
  setShowModal(false)
}

return (
    <div>
      <div className="container">
        <h2 className="text-center text-xl font-mono text-white">Password Generator</h2>
        <div className="result">
          <div className="result__title field-title">Generated Password</div>
          <div className="result__viewbox" id="result">
          {/* <h1 className=''>{password ? password : "Strong Pass"}</h1>
           */}
          <CopyToClipboard text={password}>
            <h1>{password ? password : "Strong Pass"}</h1>
          </CopyToClipboard>
          </div>
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

        <button onClick={handleGeneratePasswordClick} className="btn generate" id="generate"
         disabled={!isComplexitySelected}>
          Generate Password
        </button>
    
        <div className='flex '>
             <button onClick={handlesave}
               className='btn generate'>save</button>
              {savepassword.length > 0 && (
            <button onClick={handleview} className='btn generate'>view</button>
              )}
                <button onClick={handleCopyToClipboard}   
              className='btn generate'>copy</button>
        </div>
      </div>
      {/* //////////////////////////// */}
     {showmodal && <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
  <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6">
    <div className="flex justify-between items-center mb-4">
      <h5 className="text-xl  font-semibold text-gray-800 ">Saved Passwords</h5>
    </div>
    <div className="text-center bg-gray-300 rounded-md m-2 p-4">
  {savepassword.map((item, index) => (
    <h1 key={index}>{item}</h1>
  ))}
</div>

    <div className="flex justify-end">
    <button
        type="button"
        className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg mr-2 hover:bg-gray-400 transition ease-in-out"
         onClick={removepassword}  
      >
        delete password
      </button>
      <button
        type="button"
        className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition ease-in-out"
         onClick={closemodal}
      >
        Close
      </button>
    </div>
  </div>
</div> }
{/* ////////////////////////////////// */}
<ToastContainer 
        autoClose={1500}
        closeOnClick
        draggable
        />
    </div>
  );
}

export default Home;












// import React,{useState} from 'react';
// import './home.css';
// import CopyToClipboard from 'react-copy-to-clipboard';
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

      
//       const [copied, setCopied] = useState(false);

    

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
// const handleCopyToClipboard = () => {
//     setCopied(true);
//     setTimeout(() => {
//     setCopied(false);
//     }, 2000); // Reset the copied state after 2 seconds
// };

// return (
//     <div>
//       <div className="container">
//         <h2 className="text-center text-xl font-mono text-white">Password Generator</h2>
//         <div className="result">
//           <div className="result__title field-title">Generated Password</div>
//           {/* <div className="result__info right">click to copy</div>
//           <div className="result__info left">copied</div> */}
//           <div className="result__viewbox" id="result">
//           <h1 className=''>{password ? password : "Strong Pass"}</h1>
//           </div>
//            <CopyToClipboard text={password} onCopy={handleCopyToClipboard}>
//            <button  className="bg-yellow-500">
//            <i class="fa-solid fa-clipboard-user"></i>
//           </button>
//             </CopyToClipboard>
//             {copied && (
//             <span className="ml-2 text-green-500">Copied to clipboard!</span>
//             )}
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
