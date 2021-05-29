import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/";

import Home from "./pages/Home/";
import Favoritos from "./pages/Favoritos/";

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/favoritos" component={Favoritos} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
