import "../styles/Busqueda.scss";
import rickmorty from "../assets/img/busqueda.png";

const Busqueda = ({ handleChange }) => {
	return (
		<div className="contenedor-form">
			<form>
				<label>
					Search:
					<input type="text" onChange={handleChange} placeholder="Search" />
				</label>
			</form>
			<div className="contenedor-img">
				<img src={rickmorty} alt="rick and Morty"></img>
			</div>
		</div>
	);
};

export default Busqueda;
