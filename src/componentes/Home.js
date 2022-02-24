import "../styles/Home.scss";
import home from "../assets/img/home.png";

const Home = () => {
	return (
		<div>
			<div className="contenedor-imagen">
				<img src={home} alt="Rick and Morty"></img>
			</div>
		</div>
	);
};

export default Home;
