module.exports = function getZerosCount(number, base) {

  var result = number;
  var numeralSystem = base;

  for (i = 2; i <= base; i++) {
    if (numeralSystem % i === 0) {
      var j = 0;

      while (numeralSystem % i === 0) {
      numeralSystem = Math.floor(numeralSystem / i);
      j++;
      }

      var x = 0;
      y = number;

      while (y / i > 0) {
      x += Math.floor(y / i);
      y = Math.floor(y / i);
      }

      result = Math.floor(Math.min(result, x / j));
      }
    }

  return result;
}