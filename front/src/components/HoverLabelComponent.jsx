// HoverLabelComponent.jsx
import React, { useState } from 'react';

const HoverLabelComponent = ({ buttonContent, labelContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div >
        {buttonContent}
      </div>
      {isHovered && (
        <div className="absolute bottom-full w-20 mb-2 px-2 py-1 bg-gray-700 text-white text-sm rounded">
          {labelContent}
        </div>
      )}
    </div>
  );
};

export default HoverLabelComponent;
