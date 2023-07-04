import React from "react";

// other ways
// Type 1 : const handleClick : React.MouseEvent<HTMLButtonElement,MouseEvent> = (event) => {}
// Type 2 : const handleClick : React.MouseEventHandler<HTMLButtonElement> = (event) => {}
// Type 3 : const handleClick = (event : any) => {}

const Button = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Is Clicked");
  };

  return (
    <div>
      Button :{" "}
      <button onClick={handleClick} type="button">
        Click
      </button>
    </div>
  );
};

export default Button;
