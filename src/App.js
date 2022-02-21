import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import Episodios from "./componentes/Episodios";
import Personajes from "./componentes/Personajes";
import Ubicacion from "./componentes/Ubicacion";
import Home from "./componentes/Home";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/personajes" element={<Personajes />} />
					<Route path="/episodios" element={<Episodios />} />
					<Route path="/ubicacion" element={<Ubicacion />} />
				</Routes>
				<Nav />
				<Main />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
