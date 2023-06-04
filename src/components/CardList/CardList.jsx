import CardListItem from './CardListItem';
import { CardListEl } from './CardList.styled';

const CardList = ({ tweets }) => {
  return (
    <CardListEl>
      {tweets.map(({ id, ...otherProps }) => (
        <CardListItem key={id} id={id} tweet={otherProps} />
      ))}
    </CardListEl>
  );
};

export default CardList;
