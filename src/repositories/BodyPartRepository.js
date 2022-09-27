const BodyPart = require('../models/BodyPart');

class BodyPartRepository {
  getBodyParts() {
    return BodyPart.find();
  }

  addBodyPart(part) {
    const bodyPart = new BodyPart(part);
    return bodyPart.save()
  }
}

module.exports = new BodyPartRepository();
