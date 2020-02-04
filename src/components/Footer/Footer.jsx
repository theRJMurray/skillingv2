import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { toggleTheme } from "../../actions";

const SettingsBar = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background: ${props => props.theme.header};
`;

const ThemeButton = styled.button`
	background: none;
	border: none;
`;

const Footer = () => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();
	const dispatchTheme = () => dispatch(toggleTheme());

	const themeString = theme ? "Toggle Dark Mode" : "Toggle Light Mode";

	return (
		<SettingsBar>
			<ThemeButton onClick={dispatchTheme}>{themeString}</ThemeButton>
		</SettingsBar>
	);
};

export default Footer;
