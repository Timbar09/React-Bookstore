const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oEC3cSalwrw0dzrlODAn/books';

const getBooks = async () => {
  try {
    const response = await fetch(BOOKS_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error.message;
  }
};

const storeBook = async (book) => {
  const data = {
    ...book,
    category: 'Unknown',
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
