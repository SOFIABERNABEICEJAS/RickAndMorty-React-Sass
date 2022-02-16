import "../styles/Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="contenedor-redes-sociales">
				<ul class="redes-sociales">
					<li>
						<a href="https://github.com/SOFIABERNABEICEJAS" target="_blank">
							<p>Github: Sofi Bernabei</p>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/sofia-bernabei"
							target="_blank"
						>
							<p>Linkedin: Sofi Bernabei</p>
						</a>
					</li>
				</ul>
			</div>

			<p>Hecho con 🤍 por Sofi Bernabei</p>
		</footer>
	);
};

export default Footer;
