import React from 'react';

function Button({ children, onClick, className = "", href }) {
  const baseClasses = "bg-highlight text-background font-bold py-3 px-6 rounded-md hover:bg-neon-cyan-600 transition-colors duration-300 inline-block";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

export default Button;
