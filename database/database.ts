import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseSync('bookDatabase.db');
export const createTables = async () => {


    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          isbn INTEGER,
          owned BOOLEAN,
          read BOOLEAN,
          want BOOLEAN,
        )`)

    
};


export const addBook = async (isbn: number, owned: boolean, read: boolean, want: boolean) => {
    await db.execAsync(`INSERT INTO books (isbn, owned, read, want) VALUES (${isbn}, ${owned},${read},${want});`);
}

export const getAllBooks = async () => {
    console.log("i")
    const allRows = await db.getAllAsync('SELECT * FROM books');
    console.log("j")
    
    console.log(allRows)
    return allRows
}

export const deleteBook = async ( id: number) => {
    await db.runAsync('DELETE FROM books WHERE id = $id', { $id: id });
}

export const updateBookOwnership = async ( id: number, owned: boolean) => {
    await db.runAsync('UPDATE books SET owned = ? WHERE id = ?', [owned, id])
}

export const updateBookRead = async ( id: number, read: boolean) => {
    await db.runAsync('UPDATE books SET read = ? WHERE id = ?', [read, id])
}

export const updateBookWant = async ( id: number,  want: boolean) => {
    await db.runAsync('UPDATE books SET want = ? WHERE id = ?', [want, id])
}

createTables();