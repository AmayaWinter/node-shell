const fs = require("fs");

module.exports = (done, fileName) => {
  fs.readFile("./" + fileName[0], "utf8", (err, fileContents) => {
    if (err) {
      done("Something went wrong!");
      done(err)
    } else {
      done(fileContents);
      done("\nprompt> ");
    }
  });
};
