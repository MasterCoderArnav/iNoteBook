const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

// Route 1: Fetch all the notes using: GET "/api/notes/fetchAllNotes". Login required
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
    try{
        let notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
});

// Route 2: Add a new note using: POST "/api/notes/addNote". Login required
router.post("/addNote", fetchUser,[
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({min: 5}),
    body("tag", "Tag must be atleast 3 characters").isLength({min: 3}),
], async (req, res) => {
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({error: error.array()});
        }
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
});

module.exports = router;