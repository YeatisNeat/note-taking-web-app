const fs = require('fs')
const express = require("express")
const app = express()
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:8097"]
}

const data = JSON.parse(fs.readFileSync('./data.json'))

app.use(cors(corsOptions))
app.use(express.json)

app.get("/api/:category", (req, res) => {
    const category = req.params.category
    const dataSend = data.notes.filter( note => {
        if (category == 'All Notes') return data.notes
        return note.tags.includes(category)
    }) 
    res.json({notes: dataSend})
})

app.post("/api", (req, res) => {
    console.log(req)
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})