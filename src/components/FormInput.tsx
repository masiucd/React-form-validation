/* eslint-disable react/prop-types */
import * as React from 'react';

interface P {
  id: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<P> = ({
  type, value, placeholder, name,
  id,
  handleChange,
}) => {
  let a;


  return (
    <>
      <input id={id} type={type} value={value} placeholder={placeholder} name={name} onChange={handleChange} />
    </>
  );
};
export default FormInput;
