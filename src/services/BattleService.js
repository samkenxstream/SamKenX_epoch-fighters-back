const repository = require("../repositories/BattleRepository");

class BattleService {
  getBattlesList() {
    return repository.getFullList();
  }

  getBattle(id) {
    return repository.getEnemyById(id);
  }

  async addBattle(battle) {
    return await repository.addBattle(battle);
  }
}

module.exports = new BattleService();
