import "../styles/Busqueda.scss";
import rickmorty from "../assets/img/ricky.png";

const Busqueda = ({ handleChange }) => {
	return (
		<div className="contenedor-form">
			<form>
				<label>
					Iniciar busqueda:
					<input
						type="text"
						onChange={handleChange}
						placeholder="Iniciar busqueda"
					/>
				</label>
			</form>
			<div className="contenedor-img">
				<img src={rickmorty}></img>
			</div>
		</div>
	);
};

export default Busqueda;
