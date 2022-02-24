import "../styles/Personajes.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import { Link } from "react-router-dom";

const Personajes = () => {
	const [personaje, setPersonaje] = useState([]);
	const [busqueda, setBusqueda] = useState("");
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPersonaje(data.results);
			});
	}, [busqueda]);

	const handleChange = (e) => setBusqueda(e.target.value);
	return (
		<section className="section">
			<Busqueda handleChange={handleChange} />

			<div className="contenedor-card">
				{personaje.map((curr) => (
					<Link to={`/personajes/${curr.id}`}>
						<Card
							key={curr.id}
							img={curr.image}
							nombre={curr.name}
							id={curr.id}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Personajes;
