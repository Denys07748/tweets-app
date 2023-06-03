import BackLink from 'components/BackLink/BackLink';
import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import * as API from 'services/apiService';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState('');

  useEffect(() => {
    getTweets();
  }, []);

  const getTweets = async () => {
    setIsLoading(true);
    try {
      const userData = await API.fetchTweets(page);
      // if (userData.results.length === 0) {
      //   return toast.error(
      //     'Sorry, there are no images matching your search query. Please try again.'
      //   );
      // }

      setTweets(userData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BackLink to={'/'}>Back</BackLink>
      <CardList cards={tweets} />
      {isLoading && <Loader />}
    </>
  );
};

export default TweetsPage;
