import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const bookStore = [
    { id: '1', title: 'The Secret ot Life', author: 'Great Van Author' },
    { id: '2', title: 'Magical Dancing Feet', author: 'Awesomenho Dos Santos' },
    { id: '3', title: 'Precision and class', author: 'Luka Raadovic' },
  ];

  return (
    <main>
      <section style={{ border: 'solid 1px', padding: '1rem' }}>
        <ul>
          {bookStore.map((book) => (
            <Book key={book.id} bookProp={book} />
          ))}
        </ul>
      </section>
      <Form />
    </main>
  );
};

export default Books;
