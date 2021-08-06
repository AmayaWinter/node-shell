const fs = require('fs');

module.exports = (args) => {
  fs.readFile('./' + args[0], 'utf8', (err, fileContents) => {
    if(err) {
      throw err;
    }
    else {
      console.log(fileContents);
    }

  })
  process.stdout.write('\nprompt> ');
}
