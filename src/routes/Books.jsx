import { useSelector } from 'react-redux';

import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <section style={{ border: 'solid 1px', padding: '1rem' }}>
        <ul>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      </section>
      <Form />
    </main>
  );
};

export default Books;
