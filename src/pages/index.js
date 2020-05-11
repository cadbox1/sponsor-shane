/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-ui-blog/src/layout";
import { Header } from "../components/sections/header";
import { Sponsor } from "../components/sections/sponsor";

export default ({ data }) => {
	return (
		<Layout title={data.site.siteMetadata.title}>
			<Header title={data.site.siteMetadata.title} />
			<div
				sx={{
					maxWidth: "container",
					mx: "auto",
					mt: 7,
					mb: 9,
					px: 3,
				}}
			>
				<Styled.h1 sx={{ fontSize: 6 }}>Shane has switched to vaping</Styled.h1>
				<Styled.p sx={{ fontSize: 3, mt: 4 }}>And I think that's pretty great.</Styled.p>

				<Styled.h2 sx={{ mt: 8 }}>
					<span role="img" aria-label="volcano">🌋</span> Smokey Shane
				</Styled.h2>
				<Styled.p sx={{ mt: 4 }}>
					Shane is fun to be around and likes to have a laugh but Shane also
					blows lots of smoke out of his mouth hole and that's not so fun to be
					around.
				</Styled.p>

				<Styled.h2 sx={{ mt: 6 }}>
					<span role="img" aria-label="watermelon">🍉</span> Watermelon Shane (New)
				</Styled.h2>
				<Styled.p sx={{ mt: 4 }}>
					Shane is still fun to be around and still likes to have a laugh but
					now blows nice smelling watermelon vapour out of his mouth hole.
					Shane's good vibes now come in watermelon flavour. Shane has opted for
					the sexy, compact vape instead of the Walkie Talkie battery pack
					style.
				</Styled.p>

				<Styled.h2 sx={{ mt: 6 }}>More about Shane</Styled.h2>
				<Styled.p sx={{ fontSize: 2, mt: 4 }}>
					Shane is hard to summarise in one paragraph but here's a few things we
					know about him:
					<ul>
						<li>Likes beers.</li>
						<li>Tells funny jokes.</li>
						<li>Talks really fast when he's excited.</li>
						<li>Likes lasagna.</li>
						<li>
							Favourite colour is{" "}
							<span sx={{ color: "favouriteColorGreen" }}>green</span>.
						</li>
						<li>Watermelon compliments his personality.</li>
					</ul>
				</Styled.p>

				<Styled.h2 sx={{ mt: 6 }}>How you can help</Styled.h2>
				<Styled.p sx={{ mt: 4 }}>
					Shane is saving a bit of money with the vape and his friends enjoy him
					more but it's not enough. We need your help to keep Shane on the right track and smelling nice. 
				</Styled.p>
				<Styled.p sx={{ mt: 4 }}>
					Sponsor Shane today.
				</Styled.p>

				<Sponsor />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
				social {
					name
					url
				}
			}
		}
	}
`;
