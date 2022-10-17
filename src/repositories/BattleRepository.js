const BattleModel = require('../models/Battle');

class BattleRepository {
  getFullList() {
    return BattleModel.find();
  }

  getBattleById(id) {
    return BattleModel.findOne({_id: id});
  }

  async addBattle(battle) {
    const command = new BattleModel(battle);
    return await command.save();
  }
}

module.exports = new BattleRepository();
