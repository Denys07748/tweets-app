import BackLink from 'components/BackLink/BackLink';
import Button from 'components/Button/Button';
import CardList from 'components/CardList/CardList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as API from 'services/apiService';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [currentTweetsLength, setCurrentTweetsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTweets(page);
  }, [page]);

  const getTweets = async page => {
    setIsLoading(true);
    try {
      const userData = await API.fetchTweets(page);
      setCurrentTweetsLength(userData.length);
      setTweets(state => [...state, ...userData]);
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(
          'Oops, an error occurred while loading the page. Please try reloading the page'
        );
      }
      if (error.response.status === 500) {
        toast.error('Oops... Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <main>
      <BackLink to={'/'}>Back</BackLink>
      <CardList tweets={tweets} />
      {isLoading && <Loader />}
      {!isLoading &&
        tweets.length > 0 &&
        (currentTweetsLength === 3 ? (
          <Button onLoadMore={onLoadMore}>Load more</Button>
        ) : (
          <h4>You have reached the end of the list!</h4>
        ))}
    </main>
  );
};

export default TweetsPage;
