export class User {
  public $key: string;

  constructor(
    public address: string,
    public birthday: string,
    public email: string,
    public phone01: string,
    public phone02: string,
    public photo: string,
    public name: string,
    public admin: number,
    public username: string
  ) {}
}
