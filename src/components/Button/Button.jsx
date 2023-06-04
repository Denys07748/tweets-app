import PropTypes from 'prop-types';
import { ButtonEl } from './Button.styled';

const Button = ({ onLoadMore, children }) => {
  return (
    <ButtonEl type="button" onClick={onLoadMore}>
      {children}
    </ButtonEl>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func,
  children: PropTypes.node.isRequired,
};
