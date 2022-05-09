const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { addCompliment } = require('./controller')
const { deleteCompliment } = require('./controller')
const { updateCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/compliment', addCompliment);
app.delete("/api/compliment/:id", deleteCompliment);
app.put("/api/compliment/:id", updateCompliment)

app.listen(4000, () => console.log("Server running on 4000"));
