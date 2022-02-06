import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <Home/>
                    </Route>
                    <Route exact path={process.env.PUBLIC_URL + '/movie/:id'}>
                        <Detail />
                    </Route>
                </Switch>
            </Router>;
}

export default App;