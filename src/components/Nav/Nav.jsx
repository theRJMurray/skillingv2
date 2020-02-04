/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const NavBar = styled.div`
	background: ${props => props.theme.header.background};
	height: 56px;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.header.border};
`;

const Nav = () => {
	return <NavBar />;
};

export default Nav;
