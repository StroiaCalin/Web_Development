const fs = require("fs");
fs.writeFile("message.txt","Salut",(err) => {
    if(err) throw err;
    console.log("WRONG!");
});