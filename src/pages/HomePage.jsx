import styled from '@emotion/styled';
import Button from 'components/Button/Button';
import { NavLink } from 'react-router-dom';

const Main = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomePage = () => {
  return (
    <Main>
      <h1>Welcome to Tweets App</h1>
      <Button>
        <NavLink to="/tweets">Tweets</NavLink>
      </Button>
    </Main>
  );
};

export default HomePage;
