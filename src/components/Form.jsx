import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook, addBookUI } from '../redux/books/booksSlice';
import Button from './Button';

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
      const id = crypto.randomUUID();

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
    <section style={{ padding: '1rem' }}>
      <form style={{ display: 'flex', gap: '1rem' }} onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" value={title} onChange={handleTitle} />

        <input type="text" placeholder="Book Author" value={author} onChange={handleAuthor} />

        <Button type="submit" value="Add Book" />
      </form>
      <span>{message}</span>
    </section>
  );
};

export default Form;
