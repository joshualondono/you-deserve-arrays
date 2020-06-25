/******************
 * YOUR CODE HERE *
 ******************/


function getFirstitemFrom(arr){
  return arr[0]
}

function getLastitemFrom(arr){
  return arr[arr.length -1]
}

function isLongList(arr){
  return arr[3]
}

function firstItemNumber(arr){
  if(arr.length >= 10){
    return 'true'
  }  
}

function secondCharThirdString(arr){
  let name = arr[3];
  return name[2]
}  





 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
