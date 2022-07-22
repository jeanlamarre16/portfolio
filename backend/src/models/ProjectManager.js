const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (
        project_name,
        created_at,
        description,
        progression,
        nb_of_collaborators
      ) 
      values (?, ?, ?, ?, ?)`,
      [
        project.projectName,
        project.createdAt,
        project.description,
        project.progression,
        project.nbOfCollaborators,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set project_name=?, created_at=?, description=?, progression=?,
      nb_of_collaborators = ? where id = ?`,
      [
        project.projectName,
        project.createdAt,
        project.description,
        project.progression,
        project.nbOfCollaborators,
        project.projectId,
      ]
    );
  }

  findAllProjectByLanguage() {
    return this.connection.query(
      `SELECT project_name, language_name, language_icon FROM ${ProjectManager.table} JOIN usedlanguage ON project.id = usedlanguage.project_id JOIN language ON usedlanguage.language_id = language.id`
    );
  }
}

module.exports = ProjectManager;
