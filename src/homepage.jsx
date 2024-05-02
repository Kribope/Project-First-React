import { useState } from 'react'
import facebook from '/facebook.png'
import youtube from '/youtube.png'

function Homepage() {
  const [count, setCount] = useState(0);
  const [countminus, setCountMinus] = useState(0);

  return (
    <>
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
      <div className="card">
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

export default Homepage;