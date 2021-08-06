const process = require('process');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(' ');
  const cmd = input[0];
  const arguments = input.slice(1);

  switch(cmd) {
    case 'pwd' :
      pwd(done);
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(done, arguments);
      break;
    case 'curl':
      curl(done, arguments);
      break;
  }

});

const done = (output) => {
    console.log (output);
    console.log("prompt>");
}
