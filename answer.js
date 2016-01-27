/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * 
 * @param  integer min
 * @param  integer max
 * @return integer random number between min and max
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a unique name by adding random number in given format
 * "Name GeneratedNumber". Eg: "Rahul 11"
 * 
 * @param  string name
 * @return mixed 
 */
function getUniqueName(name)	{
	
  var _number = getRandomInt(6,15);
  var _result = name.toUpperCase() + ' ' + _number;
	
  return _result;
}
