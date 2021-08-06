const request = require("request");

module.exports = (done, args) => {
    request(args[0], {}, (err, response, body) => {
      if (err) {
        done(err);
      }
      done(body);
      done("\nprompt> ");
    });
};
