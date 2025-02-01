import React from 'react';

interface ButtonProps {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string
}

function Button({ handleSubmit,type }: ButtonProps) {
  return (
    <div>
      <button
        onClick={handleSubmit}
        style={{
          border: 'none',
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: 'black',
          color: 'white',
          fontWeight: '500',
        }}
      >
        {type}
      </button>
    </div>
  );
}

export default Button;
