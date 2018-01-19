function setKeyValue(array){
    var keyValue = array[array.length -1];
    return keyValue;
}

function isNumber(number){
  if( isNaN(number)){
    return true;
  }
}
// I turn a number into an array of numbers
function toArray(number){

  var array = number.toString().split("");
  for ( var i = 0; i < array.length; i++){
    array[i] = Number(array[i]);
  }
  return array;
}
//I turn from the right most digit of  " + array + " the double value of the data"
function doubleValue(array){
  // console.log(" MY ENTRY ARRAY IN doubleValue IS: " + array);

  array = array.slice(0, -1);
  for ( var i = array.length - 1; i > 0; i = i - 2 ) {
    array[i] = Number(array[i] * 2);
  }
 return array;
}
//I will if number in an index, greater than 9, add the two individual numbers together
function higherThanNine(array){
  // console.log(" MY ENTRY ARRAY IN higherThanNine IS: " + array);
  for( var i = 0; i < array.length; i++){
  if( array[i] > 9 ){
    array[i] -= 9;
  }
 }
 return array;
}

// console.log(higherThanNine([12, 13, 14]));
// SUM DIGIT DO THE SUM OF ALL NUMBERS IN MY ARRAY
function sumDigit(array){
  // console.log(" MY ENTRY ARRAY IN sumDigit IS: " + array);
  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
    sum += array[i];
    // console.log(sum);
  }
// console.log(" MY OUTPUT NUMBER IN sumDigit IS: " + sum);
 return sum;
}

// console.log(modulo(sumDigit([7, 9, 9, 4, 7, 6, 9, 7, 7, 2])));

// I CALCULATE NUMBER MODULO 10
function modulo(number, keyValue){
 // console.log(" MY ENTRY NUMBER IN modulo IS: " + number);
 var numberKey = number + keyValue;
 return numberKey % 10;
}
// IF MODULO IS 0: TRUE ELSE: FALSE
function moduloResult(moduloResult){
  // console.log(" MY ENTRY MODULO IN moduloResult IS: " + moduloResult);
  if( moduloResult === 0 ){
    return true;
  }
  return false;
}

// function callFunction (numberToCheck){

//   var toArrayVar = toArray(numberToCheck);
//     // console.log(toArrayVar);
//   var myKeyValue = setKeyValue(toArrayVar);

//       var doubleValueVar = doubleValue(toArrayVar);
//         // console.log(doubleValueVar);
//           var higherThanNineVar = higherThanNine(doubleValueVar);
//             // console.log(higherThanNineVar);
//               var sumDigitVar = sumDigit(higherThanNineVar);
//                 // console.log(sumDigitVar);
//                   var moduloVar = modulo(sumDigitVar, myKeyValue);
//                     // console.log(moduloVar);
//                      var moduloResultVar = moduloResult(moduloVar);


//                       console.log(moduloResultVar);
// }

module.exports = {
  isValid: function(numberToCheck){

    if (isNumber(numberToCheck)){
      return true;
    }

      var toArrayVar = toArray(numberToCheck);
      var myKeyValue = setKeyValue(toArrayVar);
      var doubleValueVar = doubleValue(toArrayVar);
      var higherThanNineVar = higherThanNine(doubleValueVar);
      var sumDigitVar = sumDigit(higherThanNineVar);
      var moduloVar = modulo(sumDigitVar, myKeyValue);
      var moduloResultVar = moduloResult(moduloVar);

    return moduloResultVar;
  }
}
// callFunction(79927398713);
// callFunction(4476333927687);
// callFunction(4741752703928715);

// var isItValid = moduloResult(modulo(sumDigit(higherThanNine(doubleValue(toArray(numberToCheck))))));
// console.log(isItValid);
