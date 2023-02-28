import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

import Button from '../components/Button';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{status}</h1>
      <Button value="New Check status" handleClick={() => dispatch(checkStatus())} />
      <Button value="New Check status" handleClick={() => dispatch(checkStatus())} />
      <input type="button" value="Check status" onClick={() => dispatch(checkStatus())} />
    </main>
  );
};

export default Categories;
