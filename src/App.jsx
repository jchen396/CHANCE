import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<Router>
			<Routes>
				<Route exact path="/chance" element={<Home />} />
				<Route
					path="chance/products/:category"
					element={<ProductList />}
				/>
				<Route path="chance/product/:id" element={<Product />} />
				<Route path="chance/cart" element={<Cart />} />

				<Route
					path="chance/login"
					element={
						user ? <Navigate replace to="/chance" /> : <Login />
					}
				/>
				<Route
					path="chance/register"
					element={
						user ? <Navigate replace to="/chance" /> : <Register />
					}
				/>
				<Route path="chance/success" element={<Success />} />
			</Routes>
		</Router>
	);
};

export default App;
