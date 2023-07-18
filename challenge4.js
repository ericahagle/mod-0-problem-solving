// Start with an array of hobbies. Print out only the words that end in "ing".

// GOAL: Print only words ending with 'ing' from an array of hobbies

// Create an array called 'hobbies'
var hobbies = ["bowling", "golf", "d&d", "crocheting", "playing basketball", "mini painting"];

// Create a function
    // Loop through the strings in the array
        // Determine .endsWith("ing")
            // Print selected strings to the console

function onlyIng(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].endsWith("ing")) {
            console.log(array[i]);
        }
    }
};

// Call the function
onlyIng(hobbies);
