import React, { useEffect, useState } from 'react';
import './loader.css'
const CustomLoader = () => {

  return (
    <div className='loaderWrapper'>
      <svg className="l l--running" viewBox="0 0 128 128" role="img" aria-label="0%">
        <defs>
          <filter id="loader-glow">
            <feGaussianBlur result="coloredBlur" stddeviation="1.5"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <linearGradient id="loader-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="loader-mask">
            <rect x="0" y="0" width="128" height="128" fill="url(#loader-grad)" />
          </mask>
        </defs>
        <g filter="url(#loader-glow)">
          <g fill="none" strokeLinecap="round" strokeWidth="2">
            <g stroke="var(--primary)">
              <g className="l__rotate">
                <circle className="l__a" cx="64" cy="64" r="60" strokeDasharray="377 377" />
                <circle className="l__b" cx="64" cy="64" r="54" strokeDasharray="339.3 339.3" />
                <circle className="l__c" cx="64" cy="64" r="48" strokeDasharray="301.6 301.6" />
              </g>
            </g>
            <g stroke="hsl(13,90%,50%)" mask="url(#loader-mask)">
              <g className="l__rotate">
                <circle className="l__a" cx="64" cy="64" r="60" strokeDasharray="377 377" />
                <circle className="l__b" cx="64" cy="64" r="54" strokeDasharray="339.3 339.3" />
                <circle className="l__c" cx="64" cy="64" r="48" strokeDasharray="301.6 301.6" />
              </g>
            </g>
          </g>
        </g>
        {/* <text fill="currentcolor" font-size="18" font-weight="bold" x="64" y="70" text-anchor="middle" data-progress>{progressPerceived}</text> */}
      </svg>
    </div>
  );
}

export default CustomLoader;