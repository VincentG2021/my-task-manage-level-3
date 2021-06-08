// BACKEND FILE FOR MY DATABASES QUERIES

const sqlite3 = require('sqlite3').verbose();

const addTask = (req, res) => {
   
    let sendData = {data: []};
    console.log("hello from backend");
  
    let db = new sqlite3.Database('./db/db.tasksdatabase', (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the tasks database.');
    });
     db.serialize(() => {
      db.each(`SELECT * FROM tasks`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row)
        sendData.data.push(row)
  
      });
    //   res.send(sendData)
    // get the last insert id
    // console.log(`A task has been inserted with id ${this.lastID}`);
    });
  
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log(sendData)
      res.send(sendData)
      console.log('Close the database connection.');
    });
  
  }


exports.addTask = addTask;
