const request = require('request');

module.exports = (args) => {
  console.log(request(args[0], {}, (err, response, body) => {
    if(err) {
      console.log('Status Code', response.statusCode);
      throw err;
    }
    console.log(body);
    process.stdout.write('\nprompt> ');
  }));

}
