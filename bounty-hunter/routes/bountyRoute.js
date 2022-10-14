const express = require("express")

const bountyRoute = express.Router()

const {v4: uuidv4} = require("uuid")

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 100000,
        type: "Jedi",
        _id: uuidv4()
    },

    {
        firstName: "Darth",
        lastName: "Maul",
        living: false,
        bountyAmount: 2000,
        type: "Sith",
        _id: uuidv4()
    }
]

bountyRoute.get("/", (req, res) =>{
    res.send(bounties)
})

bountyRoute.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRoute.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

bountyRoute.delete("/:bountyId", (req, res) =>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty data")
})

bountyRoute.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

module.exports = bountyRoute