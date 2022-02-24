import { useEffect, useState } from "react";
import "../styles/Ubicacion.scss";

import imgUbicacion from "../assets/img/imgUbicacion.png";
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
					
						<article className="card" key={curr.id}>
							<div>
								<img src={imgUbicacion} alt="rick and morty"></img>
							</div>
							<div className="info-card">
								<h3>{curr.name}</h3>
							</div>
						</article>
					
				))}
			</div>
		</section>
	);
};

export default Ubicacion;
