/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useState } from "react";
import { jsx, Styled } from "theme-ui";
import { Label, Checkbox, Button } from "theme-ui";
import queryString from "query-string";
import { RadioGroup } from "../ui/RadioGroup/RadioGroup";
import { RadioOption } from "../ui/RadioGroup/RadioOption";

export const Sponsor = () => {
	const [option, setOption] = useState();
	const [drinkWithShane, setDrinkWithShane] = useState();

	const handleClick = () => {
		const data = {
			subject: "I would genuinely like to Sponsor Shane",
			body: `Hi Team,
            
            I would like to Sponsor Shane Today.

            Sponshorship type: ${option}.
            I would like to drink my sponsorship with shane: ${
							drinkWithShane ? "Yes" : "No"
						}.

            Thanks!`,
		};

		window.location =
			"mailto:payment@sponsorshane.com?" + queryString.stringify(data);
	};

	return (
		<>
			<Styled.h2 sx={{ mt: 6 }}>Sponsor Shane</Styled.h2>
			<RadioGroup name={option} value={option} onChange={setOption}>
				<RadioOption value="one">
					$5{" "}
					<span role="img" aria-label="beer">
						🍺
					</span>
				</RadioOption>
				<RadioOption value="two">
					$20{" "}
					<span role="img" aria-label="beers">
						🍻
					</span>{" "}
					(most popular)
				</RadioOption>
				<RadioOption value="lots">
					$40{" "}
					<span role="img" aria-label="lots of beers">
						🍻🍻🍻
					</span>
				</RadioOption>
			</RadioGroup>

			<div sx={{ mt: 3, fontSize: 2 }}>Additional options:</div>
			<Label>
				<Checkbox
					value={drinkWithShane}
					onChange={(event) => setDrinkWithShane(event.target.checked)}
					sx={{ mt: "6px" }}
				/>
				<span sx={{ fontSize: 2 }}>
					I would like to drink my sponsorship with Shane
				</span>
			</Label>
			<Button sx={{ mt: 5, fontSize: 2 }} onClick={handleClick}>
				I Like Watermelon Shane!
			</Button>
		</>
	);
};
