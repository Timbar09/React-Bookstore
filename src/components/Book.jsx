import PropTypes from 'prop-types';

const Book = ({ bookProp }) => (
  <li style={{ display: 'flex', gap: '1rem' }}>
    <span>{bookProp.title}</span>
    <span>{bookProp.author}</span>
    <input type="button" value="Delete" />
  </li>
);

Book.propTypes = {
  bookProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
