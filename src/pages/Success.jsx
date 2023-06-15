import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: green;
	font-size: 40px;
	height: 100vh;
`;

const Success = () => {
	const location = useLocation();
	console.log(location);
	return <Center>successful</Center>;
};

export default Success;
