import PropTypes from 'prop-types';

import styles from '../styles/Button.module.css';

function Button({
  type, value, handleClick, className,
}) {
  return (
    <input
      type={type ?? 'button'}
      className={`${styles.button} ${className}`}
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
