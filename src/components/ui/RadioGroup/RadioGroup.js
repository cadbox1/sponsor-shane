/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export const RadioGroupContext = React.createContext({});

export const RadioGroup = ({ name, value, onChange, children, ...props }) => {
	return (
		<RadioGroupContext.Provider value={{ name, value, onChange }}>
			<div {...props}>{children}</div>
		</RadioGroupContext.Provider>
	);
};
