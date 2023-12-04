import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return <input ref={inputRef} />;
}