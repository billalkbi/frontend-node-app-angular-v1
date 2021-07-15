

export class User{
  subscribe(arg0: (user: any) => any) {
    throw new Error('Method not implemented.');
  }
  constructor(public id: string,
              public firstname: string,
              public lastname: string,
              public email: string,
              public adresse : string,
              public dateBirth: string,
              public type: string,
              public username : string,
              public password : string,


              ){

              }
}
