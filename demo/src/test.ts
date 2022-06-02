export class HomePage {
  public Users: USERS;
  public col: any;
  public rows: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.col = [
      { name: 'Name' },
      { name: 'Username' },
      { name: 'email' }
    ];

    this.httpClient.get<USERS>('../../assets/users.json')
      .subscribe((response) => {
        console.log(response)
        this.rows = response.users;
      });
  }
}
