# ssh-exec-async

> Execute a script/file over ssh using Node.JS and pipe to and from it


## Install

```sh
$ yarn add ssh-exec-async
```

It is written in plain Javascript and uses [ssh2](https://github.com/mscdex/ssh2) for all the heavy lifting.

## Usage

```js
const Client = require('ssh-exec-async')

// using ~/.ssh/id_rsa as the private key
const ssh = new Client('ubuntu@my-remote.com');

(async () => {
  const res = await ssh.exec('ls -lh');
  console.log(res);
  const res2 = await ssh.execFile('test.sh');
  console.log(res2);
})();


// or using the more settings
const ssh = new Client({
  user: 'ubuntu',
  host: 'my-remote.com',
  password: 'my-user-password',
  // key: myKeyFileOrBuffer,
});

(async () => {
  const res = await ssh.exec('ls -lh');
  console.log(res);
  const res2 = await ssh.execFile('test.sh');
  console.log(res2);
})();
```

The test.sh file content:

```bash
cd /data

pwd

ls -lh
```

## License

MIT
