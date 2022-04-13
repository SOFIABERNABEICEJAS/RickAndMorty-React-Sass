import "../styles/Footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
	return (
		<footer>
			<div className="contenedor-redes-sociales">
				<ul>
					<li>
						<a href="https://github.com/SOFIABERNABEICEJAS">
							<GitHubIcon
								aria-label="icono para incresar a github"
								fontSize="large"
							/>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/sofia-bernabei">
							<LinkedInIcon
								aria-label="icono para incresar a linkedin"
								fontSize="large"
							/>
						</a>
					</li>
				</ul>
			</div>

			<p>Hecho con 🤍 por Sofi Bernabei</p>
		</footer>
	);
};

export default Footer;
