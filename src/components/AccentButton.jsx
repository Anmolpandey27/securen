import React from 'react';

const AccentButton = ({ children, onClick, color = 'green', type = 'button', disabled = false, className = '' }) => {
  let bgColorClass, hoverClass, disabledClass;

  switch (color) {
    case 'blue': bgColorClass = 'bg-blue-600'; hoverClass = 'hover:bg-blue-700'; break;
    case 'red': bgColorClass = 'bg-red-600'; hoverClass = 'hover:bg-red-700'; break;
    case 'green':
    default: bgColorClass = 'bg-green-600'; hoverClass = 'hover:bg-green-700'; break;
  }

  disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-6 py-3 font-semibold text-white transition duration-300 rounded-lg shadow-lg ${bgColorClass} ${hoverClass} transform hover:scale-[1.02] ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default AccentButton;
