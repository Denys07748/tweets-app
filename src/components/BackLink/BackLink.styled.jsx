import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: fixed;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 24px;
  color: #373737;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;

  :hover {
    color: #471ca9;
  }
`;
