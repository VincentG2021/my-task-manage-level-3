//INDEX.JS

// lib and imports
const express = require("express");
const app = express();

const task = require("./controllers/task")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
    res.render('tasks.ejs');
});

app.post('/api/addtask', (req, res) => {
        console.log("heloooo brain", req.body)
        task.Test(req.body);
        console.log("reponse Backend", res.body)
    })
    // Create here your api setup



app.listen(3000, () => console.log("Server Up and running"));



// // lib and imports
// const express = require("express");
// const app = express();

// const task = require("./controllers/task")

// // app setup
// app.use(express.json())
// app.use("/static", express.static("public"));
// app.set("view engine", "ejs");


// // pages
// app.get('/',(req, res) => {
//   res.render('tasks.ejs');
// });

// // Create here your api setup
// app.post('/api/addtask', (req, res) => {
//   console.log("hello from brain");
//   task.AddTask(req.body);
//   console.log(task);
//   console.log(res);
// })
// // app.post('/api/addTask', test.testdb)


// app.listen(3000, () => console.log("Server Up and running"));
