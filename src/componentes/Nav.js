import "../styles/Nav.scss";
import titulo from "../assets/img/titulonuevo.png";
import ver from "../assets/img/ver.png";
import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="nav">
			<div className="contenedor-titulo">
				<img src={titulo}></img>
			</div>
			<div className="contenedor-link">
				<ul>
					<li>
						<Link to="/personajes">Personajes</Link>
					</li>
					<li>
						<Link to="/Episodio">Episodio</Link>
					</li>
					<li>
						<Link to="/ubicacion">Ubicacion</Link>
					</li>
				</ul>
			</div>
			<div className="contenedor-imagen">
				<img src={ver}></img>
			</div>
		</nav>
	);
};

export default Nav;
