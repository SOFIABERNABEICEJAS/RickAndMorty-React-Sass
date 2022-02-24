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
					<Link to={`/ubicacion/${curr.id}`}>
						<Card key={curr.id} img={curr.image} nombre={curr.name} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Ubicacion;
