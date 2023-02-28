import PropTypes from 'prop-types';

const Button = ({ type, value, handleClick }) => (
  <input type={type ?? 'button'} value={value} onClick={handleClick} />
);
Button.propTypes = {
  value: PropTypes.string.isRequired,
  handlClick: PropTypes.func.isRequired,
}.isRequired;

export default Button;
