import PropTypes from 'prop-types';
import {
  CardEl,
  Logo,
  BgPicture,
  Line,
  Avatar,
  Button,
  TweetsInfo,
  FollowersInfo,
} from './CardList.styled';
import bgImg from 'images/picture2.png';
import defaultAvatar from 'images/Hansel.png';
import logo from 'images/Vector.png';
import { useState } from 'react';

const CardListItem = ({
  id,
  tweet: { tweets, followers, avatar = defaultAvatar },
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const hendleOnFollowing = () => {};

  return (
    <CardEl>
      <Logo src={logo} alt="logo" />
      <BgPicture img={bgImg} />
      <Line />
      <Avatar>
        <div>
          <img src={avatar} alt="user avatar" />
        </div>
      </Avatar>
      <TweetsInfo>{tweets} Tweets</TweetsInfo>
      <FollowersInfo>
        {followers.toLocaleString('en-US')} Followers
      </FollowersInfo>
      <Button
        type="button"
        isFollowing={isFollowing}
        //   onClick={hendleOnFollowing}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
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
