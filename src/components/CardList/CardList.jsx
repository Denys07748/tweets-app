import { useSelector } from 'react-redux';
import { selectTweets } from 'redax/selectors';
// import CardListItem from './CardListItem';

const CardList = () => {
  const cards = useSelector(selectTweets);
  console.log(cards);

  return (
    <CardList>
      {/* {cards.map(({ id, ...otherProps }) => (
        <CardListItem key={id} id={id} card={otherProps} />
      ))} */}
      <div>
        <h2>hello</h2>
      </div>
    </CardList>
  );
};

export default CardList;
