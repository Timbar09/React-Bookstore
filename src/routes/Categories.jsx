import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{status}</h1>
      <input type="button" value="Check status" onClick={() => dispatch(checkStatus())} />
    </main>
  );
};

export default Categories;
