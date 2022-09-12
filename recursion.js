/** product: calculate the product of an array of numbers. */

function product(nums , idx = 0) {
  if (idx === nums.length) return 1; // base case
  return nums[idx] * product(nums, idx + 1); // recursive case
}

/** longest: return the length of the longest word in an array of words. */

function longest(words , idx = 0 , longestNow = 0) {
  //set the base case:
  if (idx === words.length){
    return longestNow;
  }
  //set the recursive case:
  //Math.max(a,b) : get the max of a and b
  longestNow = Math.max(words[idx].length , longestNow);//Math.max('sleep','age') = 5
  return longest(words, idx+1 , longestNow); //recursive case

}

/** everyOther: return a string with every other letter. */

function everyOther(str , idx = 0 , newStr ="") {
  //base case:
  if (idx >= str.length){ //if idx is greater than or equal to the length of the string
    return newStr;
  }
  newStr += str[idx];//add the current char to newStr
  return everyother(str , idx+2 , newStr);//recursive case
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str , idx = 0) {
  let leftIdx = idx; 
  let rightIdx = str.length -idx -1; 
  if (leftIdx >= rightIdx){ 
    return true;
  }
  if (str[leftIdx] !== str[rightIdx]){
    return false;
  }
  return isPalindrome(str , idx+1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length){
    return -1;
  }
  if (arr[idx] === val){
    return idx;
  }
  return findIndex(arr , val , idx+1);
}



/** revString: return a copy of a string, but in reverse. */

function revString(str , idx=0 , newStr="") {
  if(newStr.length === str.length){
    return newStr;
  }
  newStr += str[str.length -1 -idx];
  return revString(str , idx+1 , newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj){
    if (typeof obj[key] === "string"){
      stringArr.push(obj[key]);
    }
    if (typeof obj[key] === "object"){
      stringArr = stringArr.push(...gatherStrings(obj[key]));
    }
    return stringArr;
  }

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val , left = 0, rigth = arr.length) {
  if(left > right){
    return -1;
  }
  let middle = Math.floor((left + right)/2);
  if(arr[middle] === val){
    return middle;
  }
  if(arr[middle] > val){
    return binarySearch(arr, val, middle+1 , right);
}
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
