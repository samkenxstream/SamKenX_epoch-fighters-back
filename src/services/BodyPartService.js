const repository = require("../repositories/BodyPartRepository");

class BodyPartService {
  getBodyPartList() {
    return repository.getBodyParts();
  }

  addBodyPart(part) {
    return repository.addBodyPart(part);
  }
}

module.exports = new BodyPartService();
