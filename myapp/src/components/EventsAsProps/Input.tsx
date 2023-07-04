import React, { useState } from "react";

const Input = () => {
  const [data, setData] = useState<string> ("");

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div>
      Input : <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default Input;
