import './App.css';
import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0) rotate(0)' },
      { transform: 'translate(150px,0) rotate(360deg)' },
      { transform: 'translate(150px,150px) rotate(720deg)' },
      { transform: 'translate(300px,150px) rotate(1080deg)' },
      { transform: 'translate(300px,300px) rotate(1440deg)' },
      { transform: 'translate(450px,300px) rotate(1800deg)' },
      { transform: 'translate(450px,450px) rotate(2160deg)' },
      { transform: 'translate(600px,450px) rotate(2520deg)' },
      { transform: 'translate(600px,600px) rotate(2880deg)' },
      { transform: 'translate(750px,600px) rotate(3240deg)' },
      { transform: 'translate(750px,650px) rotate(3600deg)' },
      { transform: 'translate(0px,650px) rotate(3960deg)' },
      { transform: 'translate(0px,0px) rotate(0deg)' },
    ],
    timing: {
      duration: 6000,
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
