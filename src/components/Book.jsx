import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookUI } from '../redux/books/booksSlice';

import Button from './Button';
import styles from '../styles/Book.module.css';

function Book({ book }) {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = book;

  const handleDelete = () => {
    dispatch(removeBook(id));
    dispatch(removeBookUI(id));
  };
  const progress = Math.floor(Math.random() * 124);

  return (
    <li className={`${styles.book} flex-jc-sb flex-ai-c`}>
      <div className={styles.left}>
        <p className={styles.bookCategory}>{category}</p>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookAuthor}>{author}</p>

        <div className={styles.interactButtons}>
          <Button value="Comments" className={styles.buttonInteract} />
          <Button
            value="Remove"
            handleClick={handleDelete}
            className={`${styles.buttonInteract} ${styles.buttonDelete}`}
          />
          <Button value="Edit" className={styles.buttonInteract} />
        </div>
      </div>

      <div className={`${styles.right} flex flex-ai-c`}>
        <div className={`${styles.progress} flex`}>
          <div className={styles.progressCircle}>
            <svg className={styles.circleOne} viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50" />
            </svg>

            <svg className={styles.circleTwo} viewBox="25 25 50 50">
              <circle style={{ strokeDasharray: `${progress}, 200` }} r="20" cy="50" cx="50" />
            </svg>
          </div>

          <div className={styles.completeStatus}>
            <p>{`${Math.floor((progress / 124) * 100)}%`}</p>
            <p>Completed</p>
          </div>
        </div>

        <span className={styles.separator} />

        <div className={styles.chapter}>
          <p className={styles.chapterTitle}>CURRENT CHAPTER</p>
          <p className={styles.chapterCurrent}>Chapter n</p>
          <Button value="UPDATE PROGRESS" className={styles.buttonUpdate} />
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
