const express = require("express");
const app = express();
const path = require("path");
const todoRouter = require("./route/todoRoute");

app.enable("case sensitive routing");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/images/justdog.webp"));
});

// Calling PDF with next() and next('route)
app.use("/pdf", (req, res, next) => {
    console.log("Checking through middleware")
    next();
}, (req, res, next) => {
    next('route');
}, (req, res, next) => {
    res.sendFile(path.join(__dirname, "./public/files/justpdf.pdf"));
})

// app.METHODs (app.post, app.delete, app.put)
app.post('/todo',  express.urlencoded({ extended: false }), (req, res, next) => {
    res.send("Created");
})

app.delete('/todo', (req, res, next) => {
    res.send("Deleted");
})

app.put('/todo', (req, res, next) => {
    res.send("Updated");
})

app.use("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/files/justtext.txt"));
})

// Error handling with next('err')
app.use("/homeimg", (req, res, next) => {
    next('err');
    res.send("Test");
})

app.all("/home*", (req, res, next) => {
    res.send("Welcome to my website.");
})

app.use("/todo", todoRouter);

// error handling
app.use(function (err, req, res, next) {
  res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});
