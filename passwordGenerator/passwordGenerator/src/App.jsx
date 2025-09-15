import React from 'react'
import {useState, useCallback,useEffect,useRef} from 'react';

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(true);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxzy";
    if(numberAllowed) str+= "0123456789";
    if(charsAllowed) str+= "!@#$%^&*()";

    for(let i=1; i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,charsAllowed, setPassword]);

  // copy to clipboard
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  },
  [password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charsAllowed,passwordGenerator])
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-5 text-center text-gray-800 bg-blue-800'>
    <h1 className='text-white text-center py-5'>Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50'>
       <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
       />
       <button
       onClick={()=>{
        copyPasswordToClipboard();
       }}
        className='outline-none bg-gray-800 text-white px-3 py-0.5 shrink-0'>
        Copy
       </button>
    
       </div>
       <div className='flex text-sm gap-x-2'>
       <div className='flex item-center gap-x-1'>
       <input
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}}
       />
       <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <label>characters  {charsAllowed}</label>
        <input
          type="checkbox"
          defaultChecked={charsAllowed}
          id="numberInput"
          onChange={()=>{
            setCharsAllowed((prev)=> !prev);
          }}
        />
        </div>
        <div className='flex items-center gap-x-1'>
         <label>Numbers Allowed  {numberAllowed}</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }}
        />
        </div>

       </div>



    </div>
      
    </>
  )
}

export default App
