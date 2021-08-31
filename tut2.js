const fs = require("fs");
let text = fs.readFileSync("example.txt", "utf-8")

text = text.replace("browser", "Gaurav");

console.log(text);


console.log("Creating new File...");
fs.writeFileSync("gaurav.txt", text);