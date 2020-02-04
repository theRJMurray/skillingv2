import React from "react";
import { useSelector } from "react-redux";

// Components
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Styles
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const darkTheme = {
	header: {
		background: "#282828",
		border: "#3E3E3E"
	},
	body: "#1F1F1F"
};

const lightTheme = {
	header: {
		background: "#FFF",
		border: "#E5E5E5"
	},
	body: "#F9F9F9"
};

const Container = styled.div`
	background: ${props => props.theme.body};
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: background 0.25s ease;
`;

const App = () => {
	const currentTheme = useSelector(state => state.theme);

	return (
		<ThemeProvider theme={currentTheme ? lightTheme : darkTheme}>
			<Container>
				<Nav />
				<Footer />
			</Container>
		</ThemeProvider>
	);
};

export default App;
