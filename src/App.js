import Button from "./Button";
import styles from "./App.module.css";

import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => {
        setValue((prev) => prev + 1);
    }
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    const iRunOnlyOnce = () => {
        console.log("i run only once.");
    }
    //useEffect(iRunOnlyOnce, []);
    useEffect(() => {
        console.log("CALL THE API")
    }, []);
    useEffect(() => {
        if(keyword !== "" && keyword.length > 5 ){
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]);
  return (
    <div>
        <input type="text" placeholder="Search here." onChange={onChange} />
        <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
