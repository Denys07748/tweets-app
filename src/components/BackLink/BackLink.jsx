import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="22" />
      {children}
    </StyledLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
