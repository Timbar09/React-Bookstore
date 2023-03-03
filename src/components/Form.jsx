import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook, addBookUI } from '../redux/books/booksSlice';
import Button from './Button';

import styles from '../styles/Form.module.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const id = `${Date()}_${crypto.randomUUID()}`;

      dispatch(addBook({ id, title, author }));
      dispatch(addBookUI({ id, title, author }));

      setTitle('');
      setAuthor('');
      setMessage('');
      return;
    }
    setMessage('Please fill-in all fields.');
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.left}>
          <input
            className={`${styles.title} ${styles.input}`}
            name="book_title"
            type="text"
            placeholder="Book title"
            value={title}
            onChange={handleTitle}
          />
        </div>

        <div className={styles.right}>
          <input
            className={`${styles.author} ${styles.input}`}
            type="text"
            name="book_author"
            placeholder="Book Author"
            value={author}
            onChange={handleAuthor}
          />

          <Button type="submit" value="Add Book" className={styles.buttonAdd} />
        </div>
      </form>
      <span className={styles.errorMessage}>{message}</span>
    </section>
  );
};

export default Form;
