import React from 'react';

const Display = ({ displayText }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div id="display" className="p-3 bg-dark text-white rounded">
        {displayText}
      </div>
    </div>
  );
};

export default Display;