const EnemyModel = require('../models/Enemy');

class EnemyRepository {
  getFullList() {
    return EnemyModel.find();
  }

  getEnemyById(id) {
    return EnemyModel.findOne({_id: id});
  }

  async addEnemy(hero) {
    const command = new EnemyModel(hero);
    return await command.save();
  }
}

module.exports = new EnemyRepository();
