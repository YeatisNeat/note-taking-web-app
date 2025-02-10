const express = require("express")
const app = express()
const cors = require(cors)
const corsOptions = {
    origin: ["http://localhost:8097"]
}

app.use(cors, corsOptions)

app.get("/api", (req, res) => {
    res.json({Yeet: "Yeet"})
})

app.listen(8080, () => {
    console.log("Server started on port 8080")
})