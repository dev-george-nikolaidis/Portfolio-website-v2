// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import * as styles from "./projectCard.module.scss";

interface Props {
	imageElement: any;
	name: string;
	url: string;
	githubUrl: string;
}

const ProjectCard: React.FC<Props> = ({ imageElement, name, githubUrl, url }) => {
	return (
		<div className={styles.project_container}>
			<div className={styles.image_container}>{imageElement}</div>
			<div className={styles.popup_container}>
				<h2 className={styles.project_name}>{name}</h2>
				<div>
					<a href={url} target="_blank">
						<FaExternalLinkAlt className={styles.link_icon} />
					</a>
					<a href={githubUrl} target="_blank">
						<FaGithubSquare className={styles.github_icon} />
					</a>
				</div>
			</div>
			{/* Tags */}
		</div>
	);
};

export default ProjectCard;
