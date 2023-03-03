import { useSelector } from 'react-redux';

import Book from '../components/Book';
import Form from '../components/Form';

import styles from '../styles/Books.module.css';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);

  if (isLoading) {
    return (
      <div className={`${styles.loading} container padding`}>
        <div className={styles.spinner}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.home} container padding-x`}
      style={{ maxWidth: '70em', margin: 'auto' }}
    >
      <section className={styles.books}>
        <ul>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      </section>
      <Form />
    </div>
  );
};

export default Books;
