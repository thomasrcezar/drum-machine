import React, { useEffect } from 'react';

const DrumPad = ({ text, audioFile, playSound }) => {
  const handleClick = () => {
    playSound(text);
  };

  const handleKeyDown = (e) => {
    if (e.key.toUpperCase() === text) {
      playSound(text);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="drum-pad btn btn-secondary m-2 p-4 text-white"
      id={`drum-pad-${text}`}
      onClick={handleClick}
    >
      {text}
      <audio className="clip" id={text}  src={audioFile}>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default DrumPad;