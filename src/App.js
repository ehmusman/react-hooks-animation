import './App.css';
import React, { useState, useEffect, useRef } from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
  const element = useRef(null)
  const [value, setValue] = useState(2.5)
  useEffect(() => {
    // getAnimation().playbackRate = value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0)' },
      { transform: 'translate(150px,0)' },
      { transform: 'translate(150px,150px)' },
      { transform: 'translate(300px,150px)' },
      { transform: 'translate(300px,300px)' },
      { transform: 'translate(450px,300px)' },
      { transform: 'translate(450px,450px)' },
      { transform: 'translate(600px,450px)' },
      { transform: 'translate(600px,600px)' },
      { transform: 'translate(750px,600px)' },
      { transform: 'translate(750px,650px)' },
      { transform: 'translate(0px,650px)' },
      { transform: 'translate(0px,0px)' },
    ],
    timing: {
      duration: 3000,
      direction: "alternate"
    },
  });
  return (
    <div className="container">
      <div className="btn">
        <p>Animation is {playState}</p>
        <button className="play" onClick={() => getAnimation().play()}>Play</button>
        <button className="pause" onClick={() => getAnimation().pause()}>Pause</button>
        <button className="reverse" onClick={() => getAnimation().reverse()}>Reverse</button>
        <div className='changing'>
          <input type="range" onChange={handleChange} ref={element} min='0.5' max='5' step='0.5' value={value} className="range" />
          <h3>{value}</h3>
        </div>

      </div>
      <div className="target" ref={ref} >
        <div className="sub">
        </div>
      </div>
    </div>
  );
}

export default App;
