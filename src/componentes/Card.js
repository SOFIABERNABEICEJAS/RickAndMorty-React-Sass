import "../styles/Card.scss";

const Card = ({ img, nombre, especie, estado, genero }) => {
	return (
		<article className="card">
			<div>
				<img src={img}></img>
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

export default Card;
