import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const bookId = `book${books.length + 1}`;
      console.log(bookId);
      dispatch(addBook({ bookId, title, author }));
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please fill-in all fields.');
    }
  };

  return (
    <section style={{ padding: '1rem' }}>
      <form style={{ display: 'flex', gap: '1rem' }} onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" value={title} onChange={handleTitle} />

        <input type="text" placeholder="Book Author" value={author} onChange={handleAuthor} />

        <button type="submit">ADD BOOK</button>
      </form>
      <span>{message}</span>
    </section>
  );
};

export default Form;
