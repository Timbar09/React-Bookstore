import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import Button from './Button';

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <li style={{ display: 'flex', gap: '1rem' }}>
      <span>{book.title}</span>
      <span>{book.author}</span>
      <Button value="Delete" handleClick={() => dispatch(removeBook(book.bookId))} />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
