// import { useSelector } from 'react-redux';
// import { selectTweets } from 'redax/selectors';
import CardListItem from './CardListItem';
import { CardListEl } from './CardList.styled';

const CardList = ({cards}) => {
  // const cards = useSelector(selectTweets);
  // console.log(cards);

  return (
    <CardListEl>
      {cards.map(({ id, ...otherProps }) => (
        <CardListItem key={id} id={id} card={otherProps} />
      ))}
      <div>
        <h2>hello</h2>
      </div>
    </CardListEl>
  );
};

export default CardList;
