import { useState } from 'react'
import facebook from '/facebook.png'
import youtube from '/youtube.png'

function Functional() {
    const [count, setCount] = useState(0);
    const [countminus, setCountMinus] = useState(0);
    const name = "Ivan";
    const age = 20;
    const birthday = '2004-04-15';
  
    return (
    <>
    <div>
        <h1>Functional Example</h1>
        <h2>Hello, {name} welcome to my website</h2>
        <p>You're {age} years old</p>
        <p>Birthday: {birthday}</p>
        <h3>Next age will be {age+1}</h3>
    </div>
    <p>===================================================================</p>
    <div>
        <a href="https://www.facebook.com/ivandadacay15" target="_blank">
        <img src= {facebook} className="fb" alt="Facebook"/>
        <a href="https://www.youtube.com/@ivanemmanueldadacay2913" target="_blank">
            <img src= {youtube} className='yt' alt="Youtube"/>
        </a>
        </a>
    </div>
        <h1>Ivan Emmanuel A. Dadacay</h1>
        <h2>BSIT-2R3</h2>
    <p>===================================================================</p>
    <div>
        <p>Increment Counting</p>
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>Decrementing Counting</p>
        <button onClick={() => setCountMinus((countminus) => countminus - 1)}>
        count is {countminus}
        </button>
    </div>
    </>
    )
  }
  
  export default Functional;