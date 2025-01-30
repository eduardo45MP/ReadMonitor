import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('books.db');

export const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        total_pages INTEGER,
        read_pages INTEGER,
        status TEXT,
        notes TEXT,
        created_at TEXT
      );`
    );
  });
};

export const insertBook = (book) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO books (title, author, total_pages, read_pages, status, notes, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [book.title, book.author, book.total_pages, book.read_pages, book.status, book.notes, book.created_at]
    );
  });
};

export const fetchBooks = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM books', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};
