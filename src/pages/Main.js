import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  return <StyledLink to="/posts">posts바로가기</StyledLink>;
}
export default Main;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
