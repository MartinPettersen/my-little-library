import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('bookDatabase.db');

export const createTables = async () => {



    
    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          isbn INTEGER,
          owned BOOLEAN,
          read BOOLEAN,
          want BOOLEAN,
        );`

    );
};


export const addBook = async (isbn: number, owned: boolean, read: boolean, want: boolean) => {
    console.log(`INSERT INTO books (isbn, owned, read, want) VALUES (${isbn}, ${owned},${read},${want});`)
    await db.execAsync(`INSERT INTO books (isbn, owned, read, want) VALUES (${isbn}, ${owned},${read},${want});`);
}

export const getAllBooks = async () => {
    console.log("i")
    const allRows = await db.getAllAsync('SELECT * FROM books');
    console.log("j")
    
    console.log(allRows)
    return allRows
}


createTables();