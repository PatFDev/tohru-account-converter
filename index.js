const fs = require("fs");
const path = require('path');

const tohruPath = path.resolve(process.env.APPDATA || process.env.HOME + 'Library/Application Support', "tohru-aio-v1")
const logins = `${path.resolve(tohruPath)}\\logins.json`

fs.readFile(logins, "utf8", (err, input) => {
  if (err) {
    console.log("❌  File read failed:", err);
    return;
  }
  const jsonString = JSON.parse(input);

  let userFullnames = jsonString.map(function (element) {
    return `${element.username}:${element.password}`;
  });
  let accounts = userFullnames.join("\n");
  console.log("✔️  File Read Successfully");
  fs.writeFile("./output.txt", accounts, (err) => {
    if (err) {
      console.log("❌  File Write failed:", err);
      return;
    }
    console.log("✔️  File Written Successfully");
  });
});
