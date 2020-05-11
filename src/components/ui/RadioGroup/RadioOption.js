/** @jsx jsx */
import { useContext } from "react";
import { jsx, Label, Radio } from "theme-ui";
import { RadioGroupContext } from "./RadioGroup";

export const RadioOption = ({ value, children }) => {
	const { name, value: selectedValue, onChange } = useContext(
		RadioGroupContext
	);

	return (
		<Label sx={{ alignItems: "center" }}>
			<Radio
				name={name}
				value={value}
				checked={value === selectedValue}
				onChange={(event) => onChange(event.target.value)}
			/>
			<span sx={{ fontSize: 2 }}>{children}</span>
		</Label>
	);
};
