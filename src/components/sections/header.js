/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

const navItemStyles = {
	mt: 2,
	mx: 12,
	fontWeight: 600,
	fontSize: 22,
	textDecoration: "none",
	color: "text",
};

export const Header = ({ title }) => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = e => {
		setColorMode(isDark ? `light` : `dark`);
	};

	return (
		<nav
			sx={{
				display: "flex",
				maxWidth: `container`,
				mx: `auto`,
				px: 3,
				py: 2,
				mb: 6,
			}}
		>
			<div sx={{ mx: -12 }}>
				<h1 sx={navItemStyles}>{title}</h1>
			</div>

			<div sx={{ ml: "auto" }}>
				<button
					onClick={toggleColorMode}
					sx={{
						fontWeight: "bold",
						fontSize: 16,
						backgroundColor: "muted",
						py: 3,
						px: 4,
						color: "text",
						border: "none",
						cursor: "pointer",
					}}
				>
					{isDark ? "Dark" : "Light"}
				</button>
			</div>
		</nav>
	);
};
