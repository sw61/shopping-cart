import { useState } from "react";
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue(initialValue);
  };

  return { onChange, value, reset };
};
export default useInput;
