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

// Create here your api setup
app.post('/api/addtask', (req, res) => {
    console.log("brain says addtask fetch ok req.body is :", req.body)
    task.insertData(req.body);
    console.log("addtask fetch reponse from backend, res.body is : ", res.body)
})

app.post('/api/gettask', task.getTask);


app.listen(3000, () => console.log("Server Up and running"));
