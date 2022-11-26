import{
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}


export default App;