
import "./App.css";
import ListadoPelculas from "./views/ListadoPeliculas";
import Bloc from "./views/Blog";
import { BrowserRouter,  Route, Switch } from "react-router-dom";

function App() {
	return(
		<BrowserRouter>
		<Switch>
			<Route path="/blog">
				<Bloc/>
			</Route>
			<Route path="/">
				<ListadoPelculas/>
			</Route>
		</Switch>
		</BrowserRouter>
	);
}

export default App;
