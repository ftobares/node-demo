// Defino web framework
const express = require('express');
const bodyParser = require('body-parser');

// Defino seguridad
const helmet = require('helmet')

// Middleware logger
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');

//Defino base de datos
const dbConfig = require('../config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Defino routers
const notesRouter = require('./routes/notes')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

// create a rotating write stream
var accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log'),
    compress: "gzip"
  });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Conexion a base de datos
mongoose.connect(dbConfig.url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// Defino routes
app.use('/notes', notesRouter);

app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Defino puerto
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});