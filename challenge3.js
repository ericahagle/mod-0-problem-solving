// Write a method or function that removes all instances of the letter s in a string. The method or function should accept a string as an argument and return the same string with every instance of the letter s removed.

// GOAL: Remove every 's' from a string and print the string

// OPTION 1: Using a new array
// Create a function
    // Loop through all letters in a string
        // Determine every 's' and remove them
            // Print the string (sans 's')

function sRemoval(str) {
    var newArr = [];
        for (var i = 0; i < str.length; i++) {
            if (str[i] !== 's') {
                newArr.push(str[i]);
                
            }
        }
    return newArr.join("");
};

// Call the function a few times
console.log(sRemoval("Every s must be stricken"));
console.log(sRemoval("Snakes seem so silly"));
console.log(sRemoval("The essence of simplicity is wisdom"));



// OPTION 2: Using .replace()
// Create a function
    // Return the string with every 's' replaced with an empty string

function byeByeS(inputString) {
    return inputString.replace(/s/g, "");
};

// Call the function a few times

console.log(byeByeS("Every s must be stricken"));
console.log(byeByeS("Snakes seem so silly"));
console.log(byeByeS("The essence of simplicity is wisdom"));
