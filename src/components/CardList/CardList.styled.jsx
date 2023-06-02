import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardEl = styled.li`
  position: relative;
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
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 16px;
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

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  background: ${({ isFollowing }) => (isFollowing ? '#ebd8ff' : '#5CD3A8')};

  &:hover {
    background: ${({ isFollowing }) => (isFollowing ? '#dcc3f8' : '#2ead7f')};
  }
`;
