import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vw;
  margin: 0 auto;
  padding: 0;
`;

export const AppBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 8px 24px;
  margin-bottom: 16px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #5cd3a8;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5cd3a8;
  }
`;
