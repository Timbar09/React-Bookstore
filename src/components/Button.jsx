import { useDispatch } from 'react-redux';

const Button = ({ value, handlClick }) => {
  const dispatch = useDispatch();

  return <input type="button" value={value} onClick={() => dispatch(handlClick())} />;
};

export default Button;
