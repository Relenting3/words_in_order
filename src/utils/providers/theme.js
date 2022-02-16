import React from "react";
import { ThemeProvider } from "styled-components";
import { hexToRgba } from "../scripts/data";

const theme = {
	colors:{
		first: "#CE0000",
		second: "#4f5d5b",
		text: "#525366",
		textWithOpacity: `${hexToRgba("#525366",'0.3')}`,
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
