import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        // generateBooks();
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
const generateBooks = async () => {
    const books = [];
  
    for (let i = 1; i <= 100; i++) {
      const isFree = i % 10 === 0; // Every 10th book is free
      books.push({
        name: `Book ${i}`,
        price: isFree ? 0 : Math.floor(Math.random() * 1000) + 100, // Random price between 100 and 1100
        category: `Category ${i % 5 + 1}`, // 5 categories
        image: "https://www.shutterstock.com/image-photo/stack-colorful-books-isolated-on-600nw-2499703085.jpg",
        title: `Title for Book ${i}`,
      });
    }
  
    try {
      await Book.insertMany(books);
      console.log('100 books inserted successfully');
    } catch (error) {
      console.error('Error inserting books:', error);
    } 
  };
  
  // Run the script
