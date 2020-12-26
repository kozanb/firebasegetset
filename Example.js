import Database from './Database';

export default class Example extends Component {
  constructor() {
    super();

    Database.initialize();
  }

  set(id, email, sifre) {
    Database.setData(
      'Users/',
      {
        mail: email,
        password: sifre,
      },
      id,
    ).then(result => {
      //true or false
      console.log(result);
    });
  }

  get(id) {
    //Tips: Using email as id can be useful
    Database.getData('Users/', id).then(data => {
      console.log(data);
    });
  }
}
