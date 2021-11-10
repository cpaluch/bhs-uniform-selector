/*
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
*/
module.exports = {
    authenticate
}

let Users = [
    {
        "username" : "JaredAnderson676",
        "password" : "BandGoons",
        "privilege" : "admin",
        "f_name" : "Jared",
        "l_name" : "Anderson"
    },
    {
        "username" : "BandGoon1",
        "password" : "password",
        "privilege" : "user",
        "f_name" : "Band",
        "l_name" : "Goon"
    }
]

async function authenticate({username, password}) {
    const user = Users.find(elem => elem["username"] == username && elem["password"] == password);
    if (typeof user == "undefined") {
        console.log("Unauthorized user");
        return {
            "username" : "",
            "password" : "",
            "privilege" : "accessDenied",
            "f_name" : "",
            "l_name" : ""
        }
    }
    else {
        return user;
    }
}