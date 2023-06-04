import BackLink from 'components/BackLink/BackLink';
import Button from 'components/Button/Button';
import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as API from 'services/apiService';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(0);
  const [currentTweetsLength, setCurrentTweetsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getTweets(page);
  }, [page]);

  const getTweets = async page => {
    setIsLoading(true);
    try {
      const userData = await API.fetchTweets(page);
      if (page === 0) {
        setPage(1);
      }
      setCurrentTweetsLength(userData.length);
      setTweets(state => [...state, ...userData]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <BackLink to={'/'}>Back</BackLink>
      <CardList tweets={tweets} />
      {isLoading && <Loader />}
      {!isLoading &&
        (currentTweetsLength === 3 ? (
          <Button onLoadMore={onLoadMore}>Load more</Button>
        ) : (
          <h4>You have reached the end of the list!</h4>
        ))}
      {error &&
        toast.error(
          'Oops, an error occurred while loading the page. Please try reloading the page'
        )}
    </>
  );
};

export default TweetsPage;
