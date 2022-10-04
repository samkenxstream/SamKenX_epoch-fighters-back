const repository = require("../repositories/UsersRepository");
const cryptoUtils = require('../utils/crypto');
const { v4: uuid } = require('uuid');
const { DateTime } = require("luxon");
const CodedError = require('../utils/CodedError');

class UserService {
  async getUser(addr) {
    const user = await repository.getUserByAddress(addr);
    return this.mapUser(user);
  }

  updateAmount(token, amount) {
    const user = repository.updateAmount(token, amount);
    return this.mapUser(user);
  }

  async createOrUpdateUser(loginData) {
    const {address, message, signature} = loginData;
    if(cryptoUtils.checkAddress(address, message, signature)) {
      const existedUser = await repository.getUserByAddress(address);
      const token = this.createToken();
      const expireAt = DateTime.now().plus({months: 1}).toISO();
      if(existedUser) {
        await repository.updateToken(address, token, expireAt);
      } else {
        const newUserData = {
          address,
          token,
          expireAt
        };
        await repository.addUser(newUserData);
      }
      return token;
    } else {
      throw new CodedError(500, "Inappropriate address");
    }
  }

  async getAuthorizeStatus(address) {
    const user = await repository.getUserByAddress(address);
    return !!user && DateTime.fromISO(user.expireAt) > DateTime.now();
  }

  async tokenIsActive(token) {
    const user = await repository.getUserByToken(token);
    return !!user && DateTime.fromISO(user.expireAt) > DateTime.now();
  }

  createToken() {
    return uuid();
  }

  mapUser(user) {
    const {id, address, rate, amount} = user;
    return {id, address, rate, amount};
  }
}

module.exports = new UserService();
