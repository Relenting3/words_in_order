import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors:{
		first: "#CE0000",
		second: "#4f5d5b",
		text: "#525366",
		lightGray: '#F2F2F2',
		strongGray: '#525366',
		buttons:{
			hoverFirst: "#4f5d5b"
		}
	}
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
