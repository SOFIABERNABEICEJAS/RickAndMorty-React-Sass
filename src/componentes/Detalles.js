import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetalladas from "./CardDetalladas";

const Detalles = () => {
	const params = useParams();
	const [personaje, setPersonaje] = useState([]);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
			.then((res) => res.json())
			.then((data) => {
				setPersonaje(data);
			});
	}, [params.idPersonaje]);
	console.log(params.idPersonaje);

	return (
		<div>
			<CardDetalladas
				imgg={personaje.image}
				nombre={personaje.name}
				especie={personaje.species}
				estado={personaje.status}
				genero={personaje.gender}
			/>
		</div>
	);
};

export default Detalles;
