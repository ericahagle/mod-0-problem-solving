// Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// GOAL: Convert an all lowercase sentence to Title Case

// Create a function that accepts a string as an argument
    // Split string into an array of strings (words)
    // Loop through the array
        // Convert first character of each word to Upper Case
        // Add the remaining characters of each word to the first char
    // Rejoin the array to make a string (sentence)
// Print the Title Case sentence to the console

function lowerToTitle(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
};

// Call the function
console.log(lowerToTitle("this sentence should be in title case."));
