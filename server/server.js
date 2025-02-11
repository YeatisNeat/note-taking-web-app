const fs = require('fs')
const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:8097"]
}

const data = JSON.parse(fs.readFileSync('./data.json'))

app.use(cors(corsOptions))
app.use(express.json())



app.get("/api/:category", (req, res) => {
    const category = req.params.category
    const dataSend = data.notes.filter( note => {
        if (category == 'All Notes') return data.notes
        return note.tags.includes(category)
    }) 
    res.json({notes: dataSend})
})

app.post("/api", (req, res) => {
    console.log(req.body)
    data.notes.push(req.body)
    console.log(data.notes)
    const updatedData = JSON.stringify(data, null, 2)

    fs.writeFileSync('./data.json', updatedData)
    res.status(201)
})

app.delete("/api", (req, res) => {
    console.log(req.body)
    console.log("data:", data.notes[0])
    const deleteData = data.notes.filter((note) => { 
        const isExactMatch =
        note.title === req.body.title &&
        JSON.stringify(note.tags) === JSON.stringify(req.body.tags) &&
        note.content === req.body.content;

    
        return !isExactMatch;
    })
    
    console.log(deleteData)

    const updatedData = JSON.stringify({notes: deleteData}, null, 2)

    fs.writeFileSync('./data.json', updatedData)
    res.status(201)
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})