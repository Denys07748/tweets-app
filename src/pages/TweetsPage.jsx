import BackLink from 'components/BackLink/BackLink';
import CardList from 'components/CardList/CardList';

const TweetsPage = () => {
  return (
    <>
      <BackLink to={'/'}>Back</BackLink>
      <CardList />
    </>
  );
};

export default TweetsPage;
