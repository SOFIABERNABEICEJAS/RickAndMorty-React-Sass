import "../styles/Card.scss";
const Card = ({ img, nombre }) => {
	return (
		<article className="card">
			<div>
				<img src={img} alt={nombre}></img>
			</div>
			<div className="info-card">
				<h3>{nombre}</h3>
			</div>
		</article>
	);
};

export default Card;
