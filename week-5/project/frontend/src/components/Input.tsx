import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, name, handleChange }: InputProps) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ float: "left", fontWeight: "500" }} htmlFor={name}>{name}</label>
        <input onChange={(e) => handleChange(e)} style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '4px',

        }} type={type} name={name} id={name} placeholder={placeholder} />

      </div>
    </>
  );
}

export default Input;


