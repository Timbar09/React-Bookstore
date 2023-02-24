import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => (
  <section>
    <ul style={{ border: 'solid 1px', padding: '1rem' }}>
      <Book />
    </ul>
    <Form />
  </section>
);

export default Books;
