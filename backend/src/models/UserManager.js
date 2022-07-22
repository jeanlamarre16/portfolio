const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (   
        firstname,
        lastname,
        adress,
        city,
        phone,
        postalcode,
        age,
        gender,
        email,
        password,
        training,
        presentation,
        status
      ) 
      values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.address,
        user.city,
        user.phone,
        user.postalcode,
        user.age,
        user.gender,
        user.email,
        user.password,
        user.training,
        user.presentation,
        user.status,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT firstname, lastname,profession, adress, city, postalcode, phone, email, presentation, status, language_name, year_of_xp FROM ${this.table} JOIN languageknowlege ON user.id=languageknowlege.user_id JOIN language ON languageknowlege.language_id=language.id `
    );
  }
}

module.exports = UserManager;
