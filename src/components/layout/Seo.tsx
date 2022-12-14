import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	{
		site {
			siteMetadata {
				author
				defaultImage
				defaultTitle
				titleTemplate
				description
				siteUrl
				title
				twitterUsername
			}
		}
	}
`;

export type Root = {
	site: {
		siteMetadata: {
			author: string;
			defaultImage: string;
			defaultTitle: string;
			description: string;
			siteUrl: string;
			title: any;
			twitterUsername: string;
			titleTemplate: string;
		};
	};

	extensions?: {};
};

interface Props {
	title?: string | null;
	description?: string | null;
	image?: string | null;
	article?: boolean;
}

const SEO: React.FC<Props> = ({ title, description, image, article }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery<Root>(query);

	const { defaultTitle, titleTemplate, siteUrl, defaultImage, twitterUsername, description: defaultDescription, author } = site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};

	return (
		// @ts-ignore
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			{seo.url && <meta property="og:url" content={seo.url} />}

			{(article ? true : null) && <meta property="og:type" content="article" />}

			{seo.title && <meta property="og:title" content={seo.title} />}

			{seo.description && <meta property="og:description" content={seo.description} />}

			{seo.image && <meta property="og:image" content={seo.image} />}

			<meta name="twitter:card" content="summary_large_image" />

			{twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}

			{seo.title && <meta name="twitter:title" content={seo.title} />}

			{seo.description && <meta name="twitter:description" content={seo.description} />}

			{seo.image && <meta name="twitter:image" content={seo.image} />}
		</Helmet>
	);
};

export default SEO;

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
};

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};
