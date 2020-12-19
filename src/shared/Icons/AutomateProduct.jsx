import React from 'react';

const AutomateProduct = ({ width, height, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width || 45} height={height || 42} viewBox="0 0 45 42" className={className}>
    <g fill="none" fillRule="evenodd">
      <g>
        <path fill="#6BC6FD" d="M0 3.938h38.04v28.22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3.938z" />
        <path fill="#BBE6FF" d="M0 2.625h11.079v31.533H2a2 2 0 0 1-2-2V2.625z" opacity=".685" />
        <path fill="#2A4A68" d="M3 0h32.04a3 3 0 0 1 3 3v3.094H0V3a3 3 0 0 1 3-3z" />
        <ellipse cx="3.499" cy="3.517" fill="#D0021B" rx="1.166" ry="1.172" />
        <ellipse cx="6.998" cy="3.517" fill="#F5A623" rx="1.166" ry="1.172" />
        <ellipse cx="10.497" cy="3.517" fill="#7ED321" rx="1.166" ry="1.172" />
      </g>
      <path
        fill="#E4E2E5"
        d="M28.244 34.233c-2.378-2.429-2.378-6.397.082-8.826 2.46-2.43 6.48-2.348 8.94.081 2.378 2.43 2.378 6.397-.082 8.826-2.46 2.349-6.48 2.349-8.94-.08z"
      />
      <path
        fill="#142433"
        d="M29.183 33.902c-2.073-2.117-2.073-5.575.072-7.693 2.144-2.117 5.647-2.047 7.791.07 2.073 2.118 2.073 5.576-.071 7.694-2.145 2.047-5.647 2.047-7.792-.07zm13.225-5.575c-.287-1.2-.715-2.33-1.43-3.388l1.358-1.27a.762.762 0 0 0 0-1.06l-1.502-1.481a.785.785 0 0 0-1.072 0l-1.286 1.2c-1.072-.706-2.216-1.2-3.431-1.412V19.15a.788.788 0 0 0-.787-.776h-2.144a.788.788 0 0 0-.786.776v1.765c-1.216.282-2.36.706-3.431 1.411l-1.36-1.27a.785.785 0 0 0-1.072 0l-1.5 1.482a.76.76 0 0 0 0 1.059l1.215 1.27c-.715 1.059-1.215 2.188-1.43 3.388h-1.786a.788.788 0 0 0-.788.776v2.118c0 .423.358.776.788.776h1.787c.285 1.2.714 2.33 1.43 3.388l-1.287 1.2a.76.76 0 0 0 0 1.058l1.5 1.482a.785.785 0 0 0 1.073 0l1.287-1.2c1.072.706 2.216 1.2 3.43 1.412v1.765c0 .423.358.776.787.776h2.145a.788.788 0 0 0 .786-.776v-1.765c1.215-.282 2.358-.706 3.43-1.411l1.287 1.34a.785.785 0 0 0 1.072 0l1.502-1.482a.762.762 0 0 0 0-1.058l-1.215-1.27c.715-1.06 1.215-2.189 1.43-3.388h1.787a.788.788 0 0 0 .785-.777v-2.117a.788.788 0 0 0-.785-.776h-1.787z"
      />
    </g>
  </svg>
);

export default AutomateProduct;