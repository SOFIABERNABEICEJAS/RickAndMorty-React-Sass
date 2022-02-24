import "../styles/ErrorNoEncontrado.scss";
import error from "../assets/img/404error.png";

const ErrorNoEncontrado = () => {
	return (
		<div className="contenedor404">
			<div className="contenedor-imagen">
				<img src={error} alt="error 404"></img>
			</div>
			<h1>ERROR</h1>
		</div>
	);
};

export default ErrorNoEncontrado;
