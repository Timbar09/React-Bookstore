import { useSelector } from 'react-redux';

import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);

  if (isLoading) {
    return (
      <div className="loading container padding">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className=" home container padding-x">
      <section>
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
