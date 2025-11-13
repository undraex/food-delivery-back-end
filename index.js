const express = require("express")
const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) =>{
    console.log(req, "req")
    res.json("hello")
 })

app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
})