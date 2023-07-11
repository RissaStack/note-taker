const router = require('express').Router();

const { response } = require('express');
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

//api route
router.get('/notes', (req, res) => {
    readFromFile('db/db.json').then((notes) => {
        let parsedNotes = JSON.parse(notes);
        console.log(parsedNotes);
        return res.json(parsedNotes);
    });
});

module.exports = router;
