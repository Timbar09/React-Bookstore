import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookUI } from '../redux/books/booksSlice';

import Button from './Button';
import styles from '../styles/Book.module.css';

function Book({ book }) {
  const dispatch = useDispatch();
  const { id, title, author } = book;

  const handleDelete = () => {
    dispatch(removeBook(id));
    dispatch(removeBookUI(id));
  };

  return (
    <li className={`${styles.book} flex flex-jc-sb flex-ai-c`}>
      <div className="book-details">
        <h3>{title}</h3>
        <p className={styles.bookAuthor}>{author}</p>
      </div>
      <Button value="Delete" handleClick={handleDelete} className={styles.buttonDelete} />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
