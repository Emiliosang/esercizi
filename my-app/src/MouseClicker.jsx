import React from 'react';

function MouseClicker() {
    const handleClick = ((event) => {
      console.log(event.target.name);
    });
  
    return (
      <button name="one" onClick={handleClick}>
        Click me
      </button>
    );
}
  
  export default MouseClicker;