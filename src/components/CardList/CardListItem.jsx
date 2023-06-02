import PropTypes from 'prop-types';
import {
  CardEl,
  Logo,
  BgPicture,
  Line,
  Avatar,
  CardInfo,
  Button,
} from './CardList.styled';
import bgImg from 'images/picture2.png';
import defaultAvatar from 'images/Hansel.png';
import logo from 'images/Vector.png';
// import { useDispatch } from 'react-redux';

const CardListItem = ({
  id,
  card: { tweets, followers, avatar = defaultAvatar },
}) => {
  // const dispatch = useDispatch();

  return (
    <CardEl>
      <Logo src={logo} alt="logo" />
      <BgPicture img={bgImg} />
      <Line />
      <Avatar>
        <img src={avatar} alt="user photo" />
      </Avatar>
      <CardInfo>
        <p>{tweets} TWEETS</p>
        <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
        <Button
          type="button"
          isFollowing={isFollowing}
          onClick={hendleOnFollowing}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </CardInfo>
    </CardEl>
  );
};

export default CardListItem;

CardListItem.propTypes = {
  id: PropTypes.string.isRequired,
  card: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
