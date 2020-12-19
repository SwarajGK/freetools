import React from 'react';

const LiveProduct = ({ width, height, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 45} height={height || 42} viewBox="0 0 45 42" className={className}>
    <g fill="none" fillRule="evenodd">
      <g>
        <path fill="#6BC6FD" d="M0 3.889h37.66v27.847a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3.889z" />
        <path fill="#A1DBFE" d="M5.241 10.37h26.207V28.52H5.241z" />
        <path fill="#2A4A68" d="M3 0h31.66a3 3 0 0 1 3 3v3.019H0V3a3 3 0 0 1 3-3z" />
        <ellipse cx="3.464" cy="3.474" fill="#D0021B" rx="1.155" ry="1.158" />
        <ellipse cx="6.928" cy="3.474" fill="#F5A623" rx="1.155" ry="1.158" />
        <ellipse cx="10.392" cy="3.474" fill="#7ED321" rx="1.155" ry="1.158" />
      </g>
      <path fill="#E4E2E5" d="M33 42c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12z" />
      <path
        fill="#142433"
        fillRule="nonzero"
        d="M33 42c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-21.536c-5.258 0-9.536 4.278-9.536 9.536s4.278 9.536 9.536 9.536 9.536-4.278 9.536-9.536-4.278-9.536-9.536-9.536z"
      />
      <path
        fill="#142433"
        fillRule="nonzero"
        d="M33 33.53c-2.02 0-3.53-2.563-3.53-4.855 0-2.163 1.419-3.616 3.53-3.616 2.111 0 3.53 1.453 3.53 3.616 0 2.292-1.51 4.854-3.53 4.854zM39.657 38.47C39.63 38.448 37.08 42 32.294 42c-4.75 0-7.206-3.655-7.302-3.559l-1.168-.695c.11-.114 2.795-2.805 8.302-2.805 5.477 0 8.512 2.663 8.639 2.776l-1.108.754z"
      />
    </g>
  </svg>
);

export default LiveProduct;
