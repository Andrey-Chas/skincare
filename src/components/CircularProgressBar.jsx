import React from 'react';

function CircularProgressBar({ value, maxValue }) {
  const radius = 45;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / maxValue) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="120" height="120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#EEF7FB"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#AADDF3"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="#333"
      >
        {value}/{maxValue}
      </text>
    </svg>
  );
}

export default CircularProgressBar
