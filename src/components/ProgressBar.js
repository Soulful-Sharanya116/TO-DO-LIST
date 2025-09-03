import React from 'react';

function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const progressStyle = {
    background: `conic-gradient(#a29bfe ${percentage * 3.6}deg, #dfe6e9 0deg)`,
  };

  return (
    <div className="progress-container">
      <div className="progress-text">
        <h3>Keep it Up!</h3>
        <p>You've got this</p>
      </div>
      <div className="progress-circle" style={progressStyle}>
        <div className="progress-value">
          {completed}/{total}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
