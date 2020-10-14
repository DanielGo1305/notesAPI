const express = require('express')
const bodyParser = require('body-parser')
const addNoteRoute = require('./routes/addNotes')
const editNoteRoute = require('./routes/editNotes')
const getNotesRoute = require('./routes/getNotes')
const deleteNoteRoute = require('./routes/deleteNotes')

const app = express()
app.use(bodyParser.json())
app.use(addNoteRoute)
app.use(editNoteRoute)
app.use(getNotesRoute)
app.use(deleteNoteRoute)

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.listen(3000, () => {
    console.log(`server is listening on http://localhost:3000`);
})