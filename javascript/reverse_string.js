function reverseString(str) {
  const strArr = str.split('')
  const revArr = []

  for (let i = strArr.length; i >= 0; i--) {
    revArr.push(strArr[i])
  }

  const revStr = revArr.join('')

  return revStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
