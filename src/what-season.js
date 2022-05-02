const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 * @param springDate
 */
function getSeason( springDate) {
  if(!springDate) return "Unable to determine the time of year!";

  if(!(springDate instanceof Date)){
    throw new Error("Invalid date!");
  }else if(Object.keys(springDate).length>0){
    throw new Error("Invalid date!");
  }

  const allNamesSeasons = [["winter"], ["spring"], ["summer"], ["autumn (fall)"]];
  const allYear = [
    [11, 0, 1], //winter
    [2, 3, 4],  //spring
    [5, 6, 7],  //summer
    [8, 9, 10] //autumn (fall)
  ];

  let month = springDate.getMonth();

  for (let i = 0; i < allYear.length; i++) {
    for (let j = 0; j < allYear[i].length; j++) {
      if (month === allYear[i][j]) {
        return allNamesSeasons[i][0];
      }
    }
  }
}

module.exports = {
  getSeason
};
