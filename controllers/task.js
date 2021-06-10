// BACKEND FILE FOR MY DATABASES QUERIES
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db/db.tasksdatabase');

db.run("CREATE TABLE IF NOT EXISTS mytasks (tasklist TEXT)");

const insertData = (data) => {
  let db = new sqlite3.Database('db/db.tasksdatabase')
  db.run("INSERT INTO mytasks (curenttasks) VALUES (?)", [data.dataKey]),

  console.log("connected to backend")
  db.close();
}

const getTask = (req, res) => {
  let sendData = { dataKey: [] };

  let db = new sqlite3.Database("db/db.tasksdatabase", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the tasks database.");
  });
  db.serialize(() => {
    db.each(`SELECT * FROM mytasks`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.curenttasks);
      sendData.dataKey.push(row.curenttasks);
    });
    // res.send(sendData)
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log(sendData);
    res.send(sendData);
    console.log("Close the database connection.");
  });
};



exports.insertData = insertData;
exports.getTask = getTask;



// const addTask = (req, res) => {
   
  //   let sendData = {data: []};
  //   console.log("hello from backend");
  
  //   let db = new sqlite3.Database('./db/db.tasksdatabase', (err) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     console.log('Connected to the tasks database.');
  //   });
  //    db.serialize(() => {
  //     db.each(`SELECT * FROM tasks`, (err, row) => {
  //       if (err) {
  //         console.error(err.message);
  //       }
  //       console.log(row)
  //       sendData.data.push(row)
  
  //     });
  //   //   res.send(sendData)
  //   // get the last insert id
  //   // console.log(`A task has been inserted with id ${this.lastID}`);
  //   });
  
  //   db.close((err) => {
  //     if (err) {
  //       console.error(err.message);
  //     }
  //     console.log(sendData)
  //     res.send(sendData)
  //     console.log('Close the database connection.');
  //   });
  
  // }


// exports.addTask = addTask;
