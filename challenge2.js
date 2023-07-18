// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// GOAL: Convert all strings in an array to lowercase and print them to the console.

// Create array of strings with a mix of uppercase and lowercase letters
var strArray = ["STRING", "gOlF", "dICe", "i wOUlD LIkE To rAGE"];

// Create a function
    // Loop through the strings in the array
        // Convert strings to all lowercase letters
            // Print all strings

function convertToLower(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        console.log(array[i]);
    }
};

// Call the function
convertToLower(strArray);
