const express = require("express");
const studentRouter = require("./route/studentRouter");
const app = express();
const port = 4000;

app.use(express.json());
app.use("/students", studentRouter);
app.use((err, req, res, next) => {
    res.json(500, { message: "Oops, Something went wrong!" + err });
});

app.listen(port, () => {
    console.log("Server started at port " + port);
});
