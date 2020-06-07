const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")



db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
`)

module.exports = db