const connectToMongo = require('./db');
const authRouter = require('./routes/auth')
const crudRouter = require('./routes/crud');
const express = require('express');
const cors = require('cors')


connectToMongo();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRouter);
app.use('/crud', crudRouter)

app.listen(port, ()=>{
    console.log(`Listening at port ${port}` )
})