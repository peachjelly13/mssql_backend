const express = require('express')
const app = express();
const sql = require('mssql')
require('dotenv').config()
const PORT = process.env.PORT

const config = {
    user : process.env.user,
    password : process.env.password,
    server : process.env.server,
    database : process.env.database,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
}

sql.connect(config)
.then(pool=>{
    if(pool.connected){
        console.log('connected to mssql')
    }
    app.get('/',async(req,res)=>{
        try{
            const result = await pool.request().query('Select 1 a number');
            res.send(result.recordset);
        }
        catch(err){
            console.log('Database connection failed',err)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`)
})