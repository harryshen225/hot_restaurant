const express = require("express");
const path = require("path");
const uniqueId = require("shortid");

const reservations = require("./data/reservationData");
const waitingList = require("./data/waitlistData");

const app = express();
const PORT = 3000;

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

//api request for reservations
app.get("/api/currentReservations",  (req, res) => {
    res.json(reservations);
});

//api request for waitinglist
app.get("/api/waitingList",  (req, res) => {
    res.json(waitingList);
});

//dealing with the post 
app.post("/api/tables", (req, res) => {
    let newTable = req.body;
    newTable.uniqueId = uniqueId.generate();
    console.log(newTable);
    waitingList.push(newTable);
    res.json(newTable);
});

//server listening on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});