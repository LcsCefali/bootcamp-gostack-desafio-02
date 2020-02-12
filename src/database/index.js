import Sequelize from 'sequelize';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User]; // array com os models da apk

class Database {
  constructor() {
    this.init(); // nao esquecer disso, desperdicou mt tempo :'(
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // conexao com o banco de dados postgres
  
    models.map(model => model.init(this.connection));  
  }
}
export default new Database();