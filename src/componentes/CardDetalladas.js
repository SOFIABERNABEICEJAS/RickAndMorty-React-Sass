import "../styles/CardDetalladas.scss";

const CardDetalladas = ({ img, nombre, especie, estado, genero, id }) => {
	return (
		<article className="card-detalladas" key={id}>
			<div>
				<img src={img} alt=""></img>
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
