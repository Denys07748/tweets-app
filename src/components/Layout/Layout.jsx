import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Container, AppBar, Link } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <AppBar>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </AppBar>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} theme="colored" />
    </Container>
  );
};

export default Layout;
