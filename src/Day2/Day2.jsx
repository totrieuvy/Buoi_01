import { useState } from "react";

function Day2({ title, test }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>
        Title: {title} {test}
      </p>
      <button onClick={handleClick}>click me {count}</button>
    </div>
  );
}

export default Day2;
