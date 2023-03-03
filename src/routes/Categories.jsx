import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

import Button from '../components/Button';

import styles from '../styles/Categories.module.css';

const Categories = () => {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.categories} container padding-x`}>
      <div>
        <h1 className={styles.status}>{status}</h1>
        <div>
          <Button
            value="Check status"
            handleClick={() => dispatch(checkStatus())}
            className={styles.buttonHover}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
