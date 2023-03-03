import PropTypes from 'prop-types';

function Button({
  type, value, handleClick, className,
}) {
  return (
    <input
      type={type ?? 'button'}
      className={className}
      value={value ?? 'Click me!'}
      onClick={handleClick}
    />
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}.isRequired;

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
