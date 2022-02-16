import "../styles/Main.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";

const Main = () => {
	const [personajes, setPersonajes] = useState([]);
	const [busqueda, setBusqueda] = useState("");
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character?name=${busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPersonajes(data.results);
			});
	}, [busqueda]);

	const handleChange = (e) => setBusqueda(e.target.value);
	return (
		<section className="section">
			<Busqueda handleChange={handleChange} />

			<div className="contenedor-card">
				{personajes.map((curr) => (
					<Card
						key={curr.id}
						img={curr.image}
						nombre={curr.name}
						especie={curr.species}
						estado={curr.status}
						genero={curr.gender}
					/>
				))}
			</div>
		</section>
	);
};

export default Main;
