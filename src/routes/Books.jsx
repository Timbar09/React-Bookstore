import { useSelector } from 'react-redux';

import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <main>
      <section style={{ border: 'solid 1px', padding: '1rem' }}>
        <ul>
          {books.map((book) => (
            <Book key={book.item_id} book={book} />
          ))}
        </ul>
      </section>
      <Form />
    </main>
  );
};

export default Books;
