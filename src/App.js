import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Personajes from "./componentes/Personajes";
import Episodios from "./componentes/Episodios";
import Ubicacion from "./componentes/Ubicacion";
import Detalles from "./componentes/Detalles";
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/personajes" element={<Personajes />} />
					<Route path="/personajes/:idPersonaje" element={<Detalles />} />
					<Route path="/episodios" element={<Episodios />} />
					<Route path="/ubicacion" element={<Ubicacion />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
