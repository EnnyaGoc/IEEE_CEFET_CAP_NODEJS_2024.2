const express = require("express");
require("dotenv").config();
const routes = require("./routes")

const porta = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

const app = express();

app.use(express.json());
app.use(routes);


app.listen(porta, host, () => {
    console.log(`Ouvindo a porta: ${host}:${porta}`);
});

