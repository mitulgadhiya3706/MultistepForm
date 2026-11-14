require("dotenv").config({ path: require("path").resolve(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const http = require("http");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend server is running");
})

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

connectDB()
    .then(() => {
        console.log("Database connection established.");
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err);
        process.exitCode = 1;
    });