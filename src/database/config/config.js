require('dotenv').config()
module.exports = {
  "development": {
    "username":"root",
    "password":"Va2017@9",
    "database":"movies_db",
    "host":"127.0.0.1",
    "dialect":"mysql",
    "port":3306
  },
    // "development": {
    //   "username":process.env.DB_USERNAME,
    //   "password":process.env.DB_PASSWORD,
    //   "database":process.env.DB_NAME,
    //   "host":process.env.DB_HOST,
    //   "dialect":"mysql",
    //   "port":process.env.DB_PORT
    // },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
