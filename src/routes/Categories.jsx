import { useSelector, useDispatch } from 'react-redux';
import { checkStatus, bookOrigin } from '../redux/categories/categoriesSlice';

import Button from '../components/Button';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>{status}</h1>
      <div>
        <Button value="Check status" handleClick={() => dispatch(checkStatus())} />
        <Button value="Categories by country" handleClick={() => dispatch(bookOrigin())} />
      </div>
    </main>
  );
};

export default Categories;
