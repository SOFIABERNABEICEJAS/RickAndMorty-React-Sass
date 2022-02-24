import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
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
					<Link to={`/episodios/${curr.id}`} key={curr.id}>
						<Card nombre={curr.name} />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Episodios;
