const AbstractManager = require("./AbstractManager");

class LanguageManeger extends AbstractManager {
  static table = "language";

  insert(language) {
    return this.connection.query(
      `insert into ${LanguageManeger.table} (
        language_name,
        language_icon,
        year_of_xp
      ) values (?, ?, ?)`,
      [language.languageName, language.languageIcon, language.yearOfXP]
    );
  }

  update(language) {
    return this.connection.query(
      `update ${LanguageManeger.table} set language_name = ?,
      language_icon = ?,
      year_of_xp = ? where id = ?`,
      [
        language.languageName,
        language.languageIcon,
        language.yearOfXP,
        language.id,
      ]
    );
  }
}

module.exports = LanguageManeger;
