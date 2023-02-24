const Form = () => (
  <section>
    <form style={{ display: 'flex', gap: '1rem' }}>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

export default Form;
