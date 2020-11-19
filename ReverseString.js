function reverseString(temp){
	var reverseStr = [];// use to store the character reversed 
  	var len = temp.length;// the length of the target string
  	for(i=0; i<=len+1; i++){
  		reverseStr.push(temp[len-i-1]); //From last to first(0), the characters stored into the array
  	}
  	var resultStr = reverseStr.join("");// Needs to converse the array into a string with no seperator
  	//console.log(resultStr); 
  	return resultStr;
}
var targetStr = prompt('Please input a string to reverse:') // Allow user to input the string
console.log('Reversed string:'+ reverseString(targetStr));// console print the reversed string
