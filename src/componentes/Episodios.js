import { useEffect, useState } from "react";
import "../styles/Episodios.scss";

import episodios from "../assets/img/imgEpisodio.png";
const Episodios = () => {
	const [episodio, setEpisodio] = useState([]);
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/episode`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEpisodio(data.results);
			});
	}, []);

	return (
		<section className="section">
			<div className="contenedor-card">
				{episodio.map((curr) => (
				
						<article className="card" key={curr.id}>
							<div>
								<img src={episodios} alt="Rick and morty"></img>
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

export default Episodios;
