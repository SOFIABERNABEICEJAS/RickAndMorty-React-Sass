import "../styles/Nav.scss";
import titulo from "../assets/img/titulonuevo.png";
import ver from "../assets/img/ver.png";
const Nav = () => {
	return (
		<nav className="nav">
			<div className="contenedor-titulo">
				<img src={titulo}></img>
			</div>
			<div className="contenedor-botones">
				<button> Personajes</button>
				<button> Episodio</button>
				<button> Ubicaciones</button>
			</div>
			<div className="contenedor-imagen">
				<img src={ver}></img>
			</div>
		</nav>
	);
};

export default Nav;
