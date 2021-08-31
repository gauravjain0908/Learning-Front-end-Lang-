const express = require("express")

const app = express();
const port = 80;

app.use('/static', express.static('static'))




app.get("/", (req, res) =>{

    res.send("This is my Home first App")
})

app.get("/about", (req, res) =>{

    res.send("This is my about first App")
})

app.post("/about", (req, res) =>{

    res.send("This is my post App")
})

app.get("/this", (req, res) =>{

    res.status(404).send("This is page is not found")
})


app.listen(port, () =>{

    console.log(`This is Successfully created our first app on port ${port}`);
})