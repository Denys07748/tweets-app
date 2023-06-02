import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/TweetsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
