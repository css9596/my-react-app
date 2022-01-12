import Button from "./Button";
import styles from "./App.module.css";

import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => {
        setValue((prev) => prev + 1);
    }
    console.log("i run all the ");
    const iRunOnlyOnce = () => {
        console.log("i run only once.");
    }
    //useEffect(iRunOnlyOnce, []);
    useEffect(() => {
        console.log("CALL THE API")
    }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
