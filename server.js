const notes = require('./notes.js');
var _ = require("lodash");
// var fs = require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user);
// console.log(user.username);
// fs.appendFile('greeting.txt','Hi' + user.username  + '!', () => {
//   console.log("file created");
// });
// console.log(fs);
console.log('server file avialable');
var age = notes.age;
var results = notes.addNumber(age +18, 10);
console.log(age);
console.log(results);
var data = ["person","person","gender","model","1","2","1"];
var filter = _.uniq(data);
console.log(filter);