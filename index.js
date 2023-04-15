const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {                                    // -> This line declares the variable titleCased and set it to a arrow function
  return tutorials.map((line) => {                            // -> This line is a loop that splits each element(each sentence) of the tutorials array into thier own individual arrays.
    const token = line.split(' ')                             // -> This line looks at each newly created array(which has been given the property name "line") and splits the string into individual arrays every time it finds a space(" ")
    const capitalizedToken = token.map(                       // This line is a nested map function 
      (word) => word.charAt(0).toUpperCase() + word.slice(1)  //The map function assigns each element of the token array(each token array is a sentence) the property name "word" 
     )                                                        // then looks at each element(an individual word in a sentence) 
                                                              // then using the charAt method (calling index 0) to identify the first letter and .toUpperCase() to upper case it. 
                                                              // Next the function takes the property "word" and slices it starting from the second letter to the end of the element by calling index 1 with no ending index named.
                                                              // Lastly it adds together the uppercased first letter with the remainder of the word that was sliced off. 
                                                              //example: ['what', 'does', 'the', 'this', 'keyword', 'mean?'] = ['W' + 'hat', 'D' + 'oes', 'T' + 'he', 'T' + 'his', 'K' + 'eyword', 'M' + 'ean?'] = ['What', 'Does', 'The', 'This', 'Keyword', 'Mean?']
                                                              // We now have an array that goes 2 levels deep starting from tutorials and makes each sentence an array then turns each word of the sentence into an array element. This allows JS to grab and modify the element before returning the element in a new array. 
                                                              // The new array that is returned will have our words capitalized but each element is still separate in the array.  
  
   const returnedSentence = capitalizedToken.join(' ')        // -> We use the .join() method to put the elements of the new array back together as a string. We make sure to put a space(" ") in the paranthasis so it puts a space between each element when it creates the new string.
    return returnedSentence                                   // After evaluating one array of new elements(the returned Capitalized Words) it will return a string that will be an individual element of the new "tutorials" array until it processes all the elements.
})
  } 

console.log(titleCased())

/// Below = Many failed thoughts that I worked through to get to the solution

//  const firstTitle = tutorials[0].split(' ') // -> putting `w` inside the () removes w from the board-> put a function inside that can replace removed letters
 

//  const newVariable = function(arr) {
  
//     const capitalizedFirst = word.charAt(0).toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
//   });
// }

// console.log(newVariable(firstTitle))
//const titleJoiner = newVariable.join(' ') -> invalid code

//console.log(capitalizeWords(tutorials));



 // function letterCapitalize(firstTitle) {
//   let upperCasedFirstTitle = ' '
//   console.log(upperCasedFirstTitle)
//   for (let i = 0; i < firstTitle[2]; i++) 
//   if (firstTitle.charAt(i) !== firstTitle.charAt(i).toUpperCase()) {
//     upperCasedFirstTitle = firstTitle.charAt[0].toUpperCase()
//   }
  // else if (firstTitle[i] === firstTitle[i].toUpperCase()) {
  //   return upperCasedFirstTitle = firstTitle[i]
  
    //console.log(upperCasedFirstTitle) -> unreachable code. Why?
//}
//}

// function capitalizeFirstLetter(str, index, chr){
//   if 
// }




//console.log(letterCapitalize(firstTitle))
//const transformIntoArray = firstTitle.split(' ')

// function map(tutorials, callback){
//   const newTutorials = []
//   for(let i = 0; i < tutorials.length; i++){
// }
// }
// function individualizeWords(tutorialsParam) {
//   let sentence = tutorials[0]
//   for(let i = 1; i < tutorials.length; i++){
//     sentence += " " + tutorials[i]
//   }
//   return sentence
//   console.log(sentence)
// }

// console.log(individualizeWords())


//callback function? function() = callback => 


// make function that returns array with title case tutorial names
// take first element (index 0) from array
// mutate
// likely to use charAt with a dynamic element in the () using a loop
//1. turn each word in the string to an element in an array
// --> Need to use forEach method to break into strings?
//2. turn the array into an array of strings
//3. upper case the first letter of each index in the array of strings
//4. apply same logic to tutorials array