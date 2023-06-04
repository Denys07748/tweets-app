import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 24px;
  color: black;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;

  :hover {
    color: #5cd3a8;
  }
`;
