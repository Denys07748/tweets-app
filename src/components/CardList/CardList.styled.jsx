import styled from '@emotion/styled';

export const CardListEl = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  padding-top: 40px;
`;

export const CardEl = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  width: 380px;
  height: 460px;
  margin-top: 10px;
  margin-left: 10px;

  p {
    position: absolute;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
  }
`;

export const TweetsInfo = styled.p`
  top: 267px;
`;

export const FollowersInfo = styled.p`
  top: 307px;
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const BgPicture = styled.div`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;

  background-image: ${({ img }) => `url(${img})`};
`;

export const Avatar = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  border-radius: 85.9232px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  div {
    position: absolute;
    width: 80px;
    height: 80px;
    width: 62px;
    height: 62px;
    left: 9.48px;
    top: 9.42px;
    border-radius: 85.9232px;
    overflow: hidden;
  }

  img {
    position: absolute;
    width: 62px;
    height: 62px;
    left: 0px;
    top: 0px;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  background: ${({ isFollowing }) => (isFollowing ? '#5CD3A8' : '#ebd8ff')};

  &:hover {
    background: ${({ isFollowing }) => (isFollowing ? '#2ead7f' : '#dcc3f8')};
  }
`;
