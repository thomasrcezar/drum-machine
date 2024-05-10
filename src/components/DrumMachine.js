import React, { useState } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');

  const playSound = (name) => {
    const audio = document.getElementById(name);
    setDisplayText(name);
    audio.currentTime = 0;
    audio.play();
  };
  const audioFiles = {
    Q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    W: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    E: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    A: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    S: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    D: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    Z: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    X: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    C: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  };

  return (
    <div className="container">
      <Display displayText={displayText} />
      <div className="row">
        <div className="col-12">
          <DrumPad
            playSound={playSound}
            text="Q"
            audioFile={audioFiles.Q}

          />
          <DrumPad
            playSound={playSound}
            text="W"
            audioFile={audioFiles.W}
          />
          <DrumPad
            playSound={playSound}
            text="E"
            audioFile={audioFiles.E}
          />
          <DrumPad
            playSound={playSound}
            text="A"
            audioFile={audioFiles.A}
          />
          <DrumPad
            playSound={playSound}
            text="S"
            audioFile={audioFiles.S}
          />
          <DrumPad
            playSound={playSound}
            text="D"
            audioFile={audioFiles.D}
          />
          <DrumPad
            playSound={playSound}
            text="Z"
            audioFile={audioFiles.Z}
          />
          <DrumPad
            playSound={playSound}
            text="X"
            audioFile={audioFiles.X}
          />
          <DrumPad
            playSound={playSound}
            text="C"
            audioFile={audioFiles.C}
          />
          
          {/* Add the remaining DrumPad components */}
        </div>
        {/* Add the remaining columns */}
      </div>
    </div>
  );
};

export default DrumMachine;