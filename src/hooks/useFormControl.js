import { useState } from "react";

const useFormControl = (initialInputsValue) => {
    const [state, setState] = useState(initialInputsValue);
  
    const onChange = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (fn) => (e) => {
      e.preventDefault();
      fn();
    };
  
    return [state, onChange, handleSubmit];
  };

export default useFormControl;