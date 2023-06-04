import styled from '@emotion/styled';

export const ButtonEl = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 25px;
  margin: 60px auto;
  transform: translateY(-20px);

  width: 170px;
  height: 40px;

  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background: #5cd3a8;

  &:hover {
    background: #2ead7f;
  }

  a {
    text-decoration: none;
    color: #373737;
    font-size: 18px;
    font-weight: 600;
  }
`;
