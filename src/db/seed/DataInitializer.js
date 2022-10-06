const fs = require('fs');
const path = require('path');
const bodyPartRepository = require('../../repositories/BodyPartRepository');

class DataInitializer {

  initializeData(callback) {
    this.addBodyParts()
      .then(callback)
  }

  async addBodyParts() {
    const filename = 'FuzzyFighters-Variables-FighterComponents.csv';
    const data = this.getFile(filename);

    const records = data.split(/\r?\n/);
    for (const str of records) {
      if (str.length > 0) {
        const [, partType, nameId, rarity, statRange] = str.split(',');
        const [part, valueType] = partType.split(" - ");
        const [, localId] = nameId.split(" ");
        const [rangeStart, rangeEnd] = statRange.split("-");

        console.log(localId, part, valueType, rarity, rangeStart, rangeEnd);
        const bodyPart = {
          partId: localId,
          part: part.toLowerCase(),
          type: valueType.toLowerCase(),
          rarity: rarity.toLowerCase(),
          range: [rangeStart, rangeEnd],
        }

        await bodyPartRepository.addBodyPart(bodyPart);
      }
    }
  }

  getFile(filename) {
    const filepath = path.join(__dirname, '/data/' + filename)
    try {
      const data = fs.readFileSync(filepath, 'utf8');
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DataInitializer();
