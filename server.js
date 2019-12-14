const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//waiting list - table data
const tables = [
    {
        routeName: "superman",
        name: "Superman",
        phone: "119",
        email: "123@123.com"
    }
];

//router to home.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/home.html"));
});

//router to tables.html
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/tables.html"));
});

//router to reserve.html
app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/reserve.html"));
});

//dealing with the post 
app.post("/", (req, res) => {
    let newTable = req.body;

});

//server listening on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});