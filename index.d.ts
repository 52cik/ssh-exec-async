interface Opts {
  user: string;
  host: string;
  key: string | Buffer;
  password: string;
}

declare class Client {
  private opts;
  constructor(opts: string | Opts);
  exec(cmd: string): Promise<string>;
  execFile(file: string): Promise<string>;
}

export = Client;
