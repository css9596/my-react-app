import Button from "./Button";
import styles from "./App.module.css";

import {useState} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => {
        setValue((prev) => prev + 1);
    }
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
        <Button text={"Continue"} onClick={onClick}/>
    </div>
  );
}

export default App;
