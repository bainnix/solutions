const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();


// Middleware



app.use(cors());

app.use(bodyParser.json());



const login = require('./routes/login')
const client = require('./routes/client')
const patient = require('./routes/patient')
const users = require('./routes/users')
// const documents = require('./routes/documents')

app.use('/login', login)
app.use('/client', client)
app.use('/patient', patient)
app.use('/users', users)
// app.use('/documents', documents)


const port = process.env.PORT || 8080



app.listen(port, ()=> console.log(`Server started on port ${port}`));
