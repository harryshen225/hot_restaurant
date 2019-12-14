const express = require("express");
const path = require("path");
const uniqueId = require("shortid");

// const reservations = require("./data/reservationData");
// const waitingList = require("./data/waitlistData");

const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const app = express();
const PORT = 3000;
let reservationData= [];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
app.post("/api/makereservation", async (req, res) => {
    const newTable = req.body;
    newTable.uniqueId = uniqueId.generate();
    console.log(newTable);
    reservationData.push(newTable);
    await writeFileAsync("./data/reservationData.json",JSON.stringify(newTable,null,2));
    res.json(newTable);
});

//server listening on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});