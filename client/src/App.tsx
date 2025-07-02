import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { PropertyListing } from "./features/properties/components/property-listing";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<PropertyListing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
