require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const createError = require('http-errors');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

  
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


// database configuration

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'mikayla',
  password: 'Test12345',
  database: 'acme'
})

db.connect();


// Middleware Setup
app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// require CORS

app.use(
    cors({
        origin: '*'
        // credentials: true
    })
)


// routes middleware

app.use('/', require('./routes/auth.routes'));

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
  });
  
  // Catch all error handler
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ type: 'error', error: { message: error.message } });
  });


app.listen(3001, () => console.log('Server started'))
