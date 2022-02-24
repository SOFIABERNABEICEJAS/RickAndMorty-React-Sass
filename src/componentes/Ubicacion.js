import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Ubicacion = () => {
	const [ubicacion, setUbicacion] = useState([]);
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/location`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUbicacion(data.results);
			});
	}, []);

	return (
		<section className="section">
			<div className="contenedor-card">
				{ubicacion.map((curr) => (
					<Link to={`/ubicacion/${curr.id}`} key={curr.id}>
					<article className="card">
			       	<h3>{curr.name}</h3>
	      	</article>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Ubicacion;
