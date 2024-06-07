const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config({ path: "./config.env" });
const PORT = process.env.PORT
const cors = require('cors')


try {
    require('./db/connection');
} catch (err) {
    console.error('Failed to initialize database connection:', err.message);
    process.exit(1); 
}
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))