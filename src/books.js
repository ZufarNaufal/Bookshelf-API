const { nanoid } = require('nanoid');

const books = [];
const addBookHandler = (request, h) => {
  
    const {  name, year,
    author, summay,
    publisher, pageCount,
    readPage, reading  } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
   
  const newBooks = {
    name, year,
    author, summay,
    publisher, pageCount,
    readPage, reading, 
    createdAt, updatedAt,
  };
   
  books.push(newBooks);
  const isSuccess = books.filter((book) => book.id === id).length > 0;
   
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }
   
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

module.exports = { addBookHandler, books };