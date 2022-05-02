const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample( sampleActivity) {
  let result;
  let a = Number(sampleActivity);
  if(sampleActivity == "" || typeof sampleActivity != "string"){
    result = false;
  }else if(Math.sign(a) != 1 || a<=0 || a>15){
    result = false;
  }else if(Number.isInteger(a) == true || typeof a === "number"){
    let k = (Math.log(MODERN_ACTIVITY/a))/(0.693/HALF_LIFE_PERIOD);
    result = Math.ceil(k);
  }else{
    result = false;
  }
  return result;
}
module.exports = {
  dateSample
};
