import { useEffect, useRef, useState } from 'react'
import { ClipboardIcon } from "@heroicons/react/24/outline";


import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAble, setNumberAble] = useState(false);
  const [charAble, setCharAble] = useState(false);
  const [password, setPassword] = useState("")
  const [copied, SetCopied] = useState("Copy")

  const generatePassword = () => {
    let pass = "";
    let mystr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAble) {
      mystr += "0123456789"
    }
    if (charAble) {
      mystr += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~"
    }

    for (let i = 1; i < length; i++) {
      let char = mystr.charAt(Math.floor(Math.random() * mystr.length + 1))
      pass += char;
    }

    setPassword(pass)

  }

  useEffect(() => generatePassword(), [numberAble, charAble, length])
  const passwordRef = useRef(null)

  const handleCopy = () => {
    SetCopied("Copied")

    window.navigator.clipboard.writeText(password);


    passwordRef.current.select();
    setTimeout(() => {
      window.getSelection().removeAllRanges();
      SetCopied("Copy");

    }, 1500);

  }



  return (
    <>


      <div className='flex justify-center items-center flex-col font-mono'>
        <h1 className=' text-2xl text-center mt-5 text-white bg-indigo-400 font-bold w-fit p-2 rounded mb-2' >PASSWORD GENERATOR</h1>
        <div className='  bg-gray-700 w-2xl p-10 rounded-2xl mx-3 mt-40 ' style={{
          boxShadow: "0 0px 20px rgba(129, 140, 248, 0.9)", border: "1px solid rgb(129, 140, 248)"  // Indigo with 20% opacity
        }}
        >

          <div className=' flex w-full justify-between' >
            <input
              type="text"
              readOnly
              className=' bg-white me-1.5 px-5 w-6xl rounded text-black focus:outline-none'
              placeholder='password here'
              value={password}
              ref={passwordRef}
            />
            <button
              onClick={handleCopy}
              className=' px-3 py-1.5 cursor-pointer  bg-indigo-400 text-white rounded w-3xs flex justify-center items-center gap-2' ><ClipboardIcon className="h-5 w-5" /> {copied}</button>
          </div>

          <div className=' flex justify-between mt-4'>
            <div className=' flex justify-center items-center gap-3'>
              <input
                type="range"
                min={0}
                max={50}
                className='range-indigo'
                onChange={(e) => setLength(e.target.value)}

              />
              <label className=' text-white'> length ({length})</label>
            </div>

            <div>
              <input
                type="checkbox"
                id='checkNumber'
                checked={numberAble}
                onChange={() => setNumberAble((prev) => !prev)}
              />
              <label htmlFor='checkNumber' className=' text-white cursor-pointer select-none'> Numbers</label>
            </div>

            <div>
              <input
                type="checkbox"
                id='checkCharacter'
                checked={charAble}
                onChange={() => setCharAble((prev) => !prev)}


              />
              <label htmlFor='checkCharacter' className=' text-white cursor-pointer select-none' > Characters</label>
            </div>
          </div>


        </div>
      </div >
    </>
  )
}

export default App


































// | Hook          | Kaam kya karta hai?                                                                                     |
// | ------------- | ------------------------------------------------------------------------------------------------------- |
// | `useEffect`   | Dependencies badalne pe **code run karta hai**                                                          |
// | `useCallback` | Dependencies badalne pe **function ko recreate karta hai**, par us function ko **aap khud call karoge** |

