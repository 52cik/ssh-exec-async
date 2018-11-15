const fs = require('fs');
const sshExec = require('ssh-exec');

class Client {
  constructor(opts) {
    this.opts = opts;
  }

  exec(cmd) {
    return new Promise((resolve, reject) => {
      sshExec(cmd, this.opts, (err, stdout, stderr) => {
        if (err) {
          err.stderr = stderr;
          reject(err);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  execFile(file) {
    return new Promise((resolve, reject) => {
      const content = fs.readFileSync(file);
      return this.exec(content)
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = Client;
