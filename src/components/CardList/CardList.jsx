import PropTypes from 'prop-types';
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

CardList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
