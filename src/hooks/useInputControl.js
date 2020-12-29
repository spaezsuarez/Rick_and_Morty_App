import { useState } from "react";

const useInputControl = (initialValue = "") => {
    const [inputValue, setInputValue] = useState(initialValue);
    const onChange = (e) => {
      setInputValue(e.target.value);
    };
    return [inputValue, onChange];
  };

export default useInputControl;