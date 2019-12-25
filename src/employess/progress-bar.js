import React from 'react';
import './progress-bar.css';

export default function ProgressBar() {
  return (
    <div>
        <span className = 'dot'>1</span>
        <span className = 'divider'></span>
        <span className = 'dot'>2</span>
        <span className = 'divider'></span>
        <span className = 'dot'>3</span>
    </div>
  );
}
