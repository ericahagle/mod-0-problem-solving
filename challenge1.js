// Given an array of strings, print only the strings that have exactly 4 characters.

// GOAL: Print strings with exactly 4 characters out of an array of strings

// Create an array of strings
var strArray = ["this", "array", "has", "more", "than", "four", "strings"];

// Create a function
    // Loop through the strings
        // Determine all strings.length === 4
            // Print all strings.length === 4

function strictlyFour(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].length === 4) {
            console.log(array[i]);
        }
    }
};

// Call the function
strictlyFour(strArray);
