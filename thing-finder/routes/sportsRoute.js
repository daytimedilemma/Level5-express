const express = require("express");
const sportsRoute = express();
const {v4: uuidv4} = require('uuid')
const sports = [
    { name: "basketball", requiresCleats: "false", ballIsRound: "true", _id: uuidv4() },
    { name: "baseball", requiresCleats: "true", ballIsRound: "true", _id: uuidv4() },
    { name: "soccer", requiresCleats: "true", ballIsRound: "true", _id: uuidv4() },
    { name: "football", requiresCleats: "true", ballIsRound: "false", _id: uuidv4() },
    { name: "tennis", requiresCleats: "false", ballIsRound: "true", _id: uuidv4() }
];
//Get entire list
sportsRoute.get("/", (req, res) => {
    res.send(sports);
});

//Get one sport

sportsRoute.get("/:sportsId", (req, res) => {
    const sportsId = req.params.sportsId;
    const findSport = sports.find((sport) => sport._id === sportsId);
    res.send(findSport);
});

// Create sport

sportsRoute.post("/", (req, res) => {
    const newSport = req.body;
    newSport._id = uuidv4();
    sports.push(newSport);
    res.send(`Successfully added ${newSport.name} to your list`);
});

sportsRoute.get("/search/requiresCleats", (req, res)=> {
    const requiresCleats = req.query.requiresCleats
    const filteredSports = sports.filter(sport => sport.requiresCleats === requiresCleats)
    res.send(filteredSports)
    
})

module.exports = sportsRoute;