const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if (!options.hasOwnProperty("separator")) options.separator = "+";
  if (!options.hasOwnProperty("additionSeparator")) options.additionSeparator = "|";

  if (options.hasOwnProperty("addition")) {
    str += repeatString(options.addition, options.additionSeparator, options.additionRepeatTimes);
  }
  return repeatString(str, options.separator, options.repeatTimes);
}

const repeatString = (str, separator, count) => {
  let strOut = str;
  for (let i = 1; i < count; i++) {
    strOut += separator + str;
  }
  return strOut;
}

module.exports = {
  repeater
};
