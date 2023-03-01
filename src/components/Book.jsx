import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import Button from './Button';

function Book({ book }) {
  const dispatch = useDispatch();
  const { id, title, author } = book;

  return (
    <li style={{ display: 'flex', gap: '1rem' }}>
      <span>{title}</span>
      <span>{author}</span>
      <Button value="Delete" handleClick={() => dispatch(removeBook(id))} />
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
