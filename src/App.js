import './App.css';
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

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
      </div>
      <div className="target" ref={ref} >
        <div className="sub">
        </div>
      </div>
    </div>
  );
}

export default App;
