const express = require("express");
const app = express();
const routes = require("./Routes/route")
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`<h1>This is mail page </h1>`);
});

app.use("/api/v1", routes);

app.listen(3000, () => {
    console.log("App is running at successfullty 3000");
})