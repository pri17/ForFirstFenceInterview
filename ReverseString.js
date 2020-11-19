//Version two, save half time. First vesrion can refer the commit history.
function reverseString(input) {
  var reverseStr =[]  // Use to store the string reversed
  var leftpoint = 0; // two pointers, improve time complexity
  var rightpoint = input.length - 1; // Left pointer point to the start of the original string, right one point to the end of the string
  while (rightpoint >= leftpoint) {
    reverseStr[leftpoint] = input[rightpoint];
    reverseStr[rightpoint] = input[leftpoint];
    rightpoint--;
    leftpoint++;
  }
  return reverseStr.join('');// Convert the array into string without seperator
}
var targetStr = prompt('Please input a string to reverse:'); // Allow user to input the string
console.log('Reversed string:' + reverseString(targetStr)); // console print the reversed string
