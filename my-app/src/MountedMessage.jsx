import { useEffect, useRef } from "react";

function MountMessage() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      console.log("Component is mounted for the first time!");
      isMounted.current = true;
    }
  }, []);

  return <div>Component content</div>;
}

export default MountMessage;