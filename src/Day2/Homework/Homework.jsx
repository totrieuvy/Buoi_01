import { useState } from "react";

function Homework() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Số lần bấm: {count}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default Homework;
