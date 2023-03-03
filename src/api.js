const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oEC3cSalwrw0dzrlODAn/books';

const getBooks = async () => {
  try {
    const response = await fetch(BOOKS_URL);
    const data = await response.json();
    const dataArray = Object.entries(data)
      .map(([id, data]) => ({ id, ...data[0] }))
      .sort((a, b) => a.id.localeCompare(b.id));
    return dataArray;
  } catch (error) {
    return error.message;
  }
};

const storeBook = async (book) => {
  const bookCopy = { ...book };
  bookCopy.item_id = bookCopy.id;
  const data = {
    ...bookCopy,
    category: 'Category',
  };

  await fetch(BOOKS_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return { ...data };
};

const deleteBook = async (id) => {
  await fetch(`${BOOKS_URL}/${id}`, {
    method: 'DELETE',
  });
};

export { getBooks, storeBook, deleteBook };
