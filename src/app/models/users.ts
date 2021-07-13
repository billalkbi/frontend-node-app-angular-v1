

export class User{
  subscribe(arg0: (user: any) => any) {
    throw new Error('Method not implemented.');
  }
  constructor(public firstname: string,
              public lastname: string,
              public email: string,
              public address : string,
              public dateBirth: string,
              public username : string,
              public password : string,


              ){

              }
}
