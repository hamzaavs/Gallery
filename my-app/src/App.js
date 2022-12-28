import { useState, useEffect } from 'react';
import { sculptureList } from './data.js';
import './App.css'

export default function Images() {
  const [index, setIndex] = useState(0);
  const [sculpture, setSculpture] = useState(sculptureList[0]);


  function nextclick() {
    setIndex(index + 1);
    if(index === 11){
      alert("Çok fazla gittiniz");
    }
  }
    
  function previousclick() {
    setIndex(index - 1);
    if (index === 0) {
      alert("Çok fazla gittiniz");
    }
  }

  useEffect(() => {
    setSculpture(sculptureList[index]);
  }, [index])

  return(
    <>
      <h1> GALLERY </h1>
    <div className='container'>
        <h2>
          <i>{sculpture.name}</i>
          by {sculpture.artist}
        </h2>

        <img
        src={sculpture.url}
        alt={sculpture.alt}
        />

        <p>
          {sculpture.description}
        </p>

         <form>
          <button onClick={previousclick}>
            Previous
          </button>
          <button onClick={nextclick}>
            Next
          </button>
        </form>

        <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
        </div>
    </>
  )
}