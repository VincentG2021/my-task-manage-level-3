// lib and imports
const express = require("express");
const app = express();

const task = require("./controllers/task")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  res.render('tasks.ejs');
});

// Create here your api setup
app.post('/api/addtask', (req, data) => {
  task.addTask(req.body)
  console.log("hello from brain");
  console.log(task);
})
// app.post('/api/addTask', test.testdb)


app.listen(3000, () => console.log("Server Up and running"));
