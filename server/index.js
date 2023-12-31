import express from 'express';
import dbConfig from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 3000
dbConfig();
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`App listening to port: ${PORT}`)
    }
})