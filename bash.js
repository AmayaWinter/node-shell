const process = require('process');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  // process.stdout.write('You typed: ' + cmd);
  switch(cmd) {
    case 'pwd' : {
      console.log(process.cwd());
    }
  }
  process.stdout.write('\nprompt> ');
});

