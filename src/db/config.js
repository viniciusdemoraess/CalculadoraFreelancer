const sqlite3 = require('sqlite3')
const { open } = require('sqlite3')

module.exports = () => {
    
    open({
        filenames: './database.sqlite',
        driver: sqlite3.Database
    });

};

