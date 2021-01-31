const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const passport = require('passport');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'mikayla',
    password: 'Test12345',
    database: 'acme'
  })


// GET landing page

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM User;'
  
    db.query(sql, (err, result) => {
      if(err) throw err;
      res.send(result);
    })
  })


// POST signup 

router.post('/api/signup', (req, res) => {
    db.query(
        "INSERT INTO User (first_name, last_name, email, password, profile_pic, username) VALUES (?,?,?,?,?,?);", 
        [first_name, last_name, email, password, profile_pic, username], 
        (err, result) => {
            console.log(`error signing up ${err}`);
    })
})

module.exports = router;