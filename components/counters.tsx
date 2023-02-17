// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./counters.module.css";

type MyButtonProps = {
  initialCount?: number;
};

function MyButton({ initialCount = 0 }: MyButtonProps) {
  const [count, setCount] = useState(initialCount);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton initialCount={3} />;
}
