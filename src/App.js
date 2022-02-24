import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Personajes from "./componentes/Personajes";
import Episodios from "./componentes/Episodios";
import Ubicacion from "./componentes/Ubicacion";
import Detalles from "./componentes/Detalles";
import Home from "./componentes/Home";
import ErrorNoEncontrado from "./componentes/ErrorNoEncontrado";
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/personajes" element={<Personajes />} />
					<Route path="/personajes/:idPersonaje" element={<Detalles />} />
					<Route path="/episodios" element={<Episodios />} />
					<Route path="/ubicacion" element={<Ubicacion />} />
					<Route path="*" element={<ErrorNoEncontrado />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
