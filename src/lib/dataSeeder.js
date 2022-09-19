const repository = require('../repositories/HeroesRepository');

const dataInitializer = function () {

  const initializeData = function (callback) {

    const hero1 = {
      id: 'b20a876d-9ab8-44d4-87b6-d578a7ba0351',
      name: 'Mannimarco "King of Worms"',
      characteristics: {
        strength: 10,
        speed: 15,
        charisma: 20,
      }
    };
    const hero2 = {
      id: '911eea67-88ab-47f7-832b-c6b899d9aef9',
      name: 'Ysgramor "The harbinger of us all"',
      characteristics: {
        strength: 34,
        speed: 17,
        charisma: 15,
      }
    };
    repository.addHeroItem(hero1);
    repository.addHeroItem(hero2);

    callback();

  };

  return {
    initializeData: initializeData
  };

}();

module.exports = dataInitializer;
