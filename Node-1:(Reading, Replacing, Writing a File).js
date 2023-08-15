// V-63

const fs = require("fs");   // importing module "fs"
const { test } = require("node:test");  // autometically generated during running the code

let text = fs.readFileSync("test.txt","utf-8"); // reading the file "test.txt" and storing the content in 'text' variable

text = text.replace("mango","banana");  // replacing "mango" with "banana" in 'test' variable

console.log("Reading the content of the file after replacing : "); // we are actually printing the 'text' variable here, not the "test.txt" file

console.log(text);  // we are actually printing the 'text' variable here, not the "test.txt" file

fs.writeFileSync("test-1.txt",text);    // writing new file named "test -1.txt" and content of this newly created file will be the content stored in variable 'text' => After this the new file is autometically created with the respective content

console.log("Creating new file...");    // random text
