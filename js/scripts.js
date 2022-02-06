// UI Logic

//Potential Code to be used in business logic.
// let wordSplit = word.split();
// if {word[0] === vowelArray.foreach()};
// const vowelArray = ['a', 'e','i','o','u'];
//  for(i=0,i < vowellArray.length, i++)

// const vowelArray = ['a', 'e','i','o','u'];
// let word = vowelArray.toLowerCase();
// let changedWord = (word[0] + "way");
// if (word === "a") {
// return changedWord;


// Business Logic
function pigLatin(str)  {
  console.log(str, typeof str);
  let lowercase = str.toLowerCase();
  let array = lowercase.split("");
  console.log(array);
  let vowels = ['a','e','i','o','u'];
  for (let i = 0; i < vowels.length; i++) {
    if (array[0] != vowels[i]) {
      return false;
  }
  else return true;
  }
};

// function dnaPatternDetector(dnaSequence, pattern) {
//   for (let i = 0; i < dnaSequence.length; i +=1) {
//     if (dnaSequence[i] === pattern) {
//       return true;
//     };
//     console.log("Looped!");
//   }
//   return false;
// }
// const sequence = ["X", "A", "Y", "M", "D"];
// const pattern1 = "A";
// const pattern2 = "Z";

pigLatin()

// Utility Logic
