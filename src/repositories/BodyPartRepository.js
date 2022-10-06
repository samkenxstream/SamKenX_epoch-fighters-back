const BodyPart = require('../models/BodyPart');

class BodyPartRepository {
  getBodyParts() {
    return BodyPart.find();
  }

  getByTypeAndLevel(partType, level) {
    return BodyPart.findOne({
      partId: level,
      part: partType,
    });
  }

  addBodyPart(part) {
    const bodyPart = new BodyPart(part);
    return bodyPart.save()
  }
}

module.exports = new BodyPartRepository();
