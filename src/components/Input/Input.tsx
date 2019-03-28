import * as React from 'react';

interface InputProps {
    name:string,
    setHook:(hookValue:string) => void,
    placeholder:string,
    value:string,
    type:string,

}
const Input: React.FunctionComponent<InputProps> = ({ name,
  setHook,
  placeholder,
  value,
  type,
  }) => {
  return (
    <input
      className={"input"}
      onChange={e => setHook(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  )
};

export default Input;