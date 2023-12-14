const express = require('express');
const cors = require("cors");
const { connection } = require('./Config/database');
const { ErrorMiddleware } = require('./Middleware/Error');
const sls = require('serverless-http');
const categoryQuestionRoutes = require('./Routes/categoryQuestionsRoute');
const clozeQuestionRoutes = require('./Routes/clozeQuestionsRoute');
const comprehensionQuestionRoutes = require('./Routes/comprehensionQuestionsRoute');
const app = express();

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send({ Message: "Welcome to Super Assistance" });
});

// Routes
app.use(categoryQuestionRoutes);
app.use(clozeQuestionRoutes);
app.use(comprehensionQuestionRoutes);


app.listen(process.env.PORT || 4500, async () => {
    try {
        await connection;
        console.log(`Connected to the Database at ${process.env.PORT}`);
    }
    catch (err) {
        console.log(err);
        console.log("Connection Failed!");
    }
    console.log(`Server is running...`);
});

app.use(ErrorMiddleware);

module.exports.handler = sls(app);