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
import { useEffect, useState } from 'react';
import * as API from 'services/apiService';
import { toast } from 'react-toastify';

const CardListItem = ({
  id,
  tweet: { user, tweets, followers, avatar = defaultAvatar },
}) => {
  const [isFollowing, setIsFollowing] = useState(
    () => JSON.parse(localStorage.getItem(`isFollowing ${id}`)) ?? false
  );
  const [followingUser, setFollowingUser] = useState(followers);

  useEffect(() => {
    localStorage.setItem(`isFollowing ${id}`, JSON.stringify(isFollowing));
  }, [isFollowing, id]);

  useEffect(() => {
    const changeFollowers = async () => {
      try {
        await API.changeFollowers(id, followingUser);
      } catch (error) {
        if (error.response.status === 400) {
          toast.error('Sorry, something went wrong...');
        }
      }
    };
    changeFollowers(id, followingUser);
  }, [id, followingUser]);

  const hendleOnFollowing = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowingUser(state => state - 1);
      return;
    }
    setIsFollowing(true);
    setFollowingUser(state => state + 1);
  };

  return (
    <CardEl>
      <Logo src={logo} alt="logo" />
      <BgPicture img={bgImg} />
      <Line />
      <Avatar>
        <div>
          <img src={avatar} alt={user} title={user} />
        </div>
      </Avatar>
      <TweetsInfo>{tweets} Tweets</TweetsInfo>
      <FollowersInfo>
        {followingUser.toLocaleString('en-US')} Followers
      </FollowersInfo>
      <Button
        type="button"
        isFollowing={isFollowing}
        onClick={hendleOnFollowing}
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
