import "../styles/CardDetalladas.scss";

const CardDetalladas = ({ imgg, nombre, especie, estado, genero, id }) => {
	return (
		<article className="card-detalladas">
			<div>
				<img src={imgg} alt={nombre}></img>
			</div>
			<div className="info-card">
				<h3>{nombre}</h3>
				<p>Specie: {especie}</p>
				<p>Status: {estado}</p>
				<p>Gender: {genero}</p>
			</div>
		</article>
	);
};

export default CardDetalladas;
