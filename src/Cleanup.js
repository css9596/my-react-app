import { useState, useEffect} from "react";

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => {
        setShowing(prev => !prev);
    }
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}

function Hello() {
    useEffect(() => {
      console.log("I'm here");
      //Cleanup function
      return () => {
          console.log("distroyed");
      }
    }, [])
    return (
        <h1>Hello</h1>
    )
}

export default App;