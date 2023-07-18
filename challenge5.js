// Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

// GOAL: Print "The next place I want to visit is <travel destination>!" from an array of travel destinations, after sorting them into alpha order

// Create an array 'travelDestinations'
var travelDestinations = ["Rome", "Berlin", "Paris", "Miami", "Isla Mujeres", "Los Cabos", "Newark", "Atlanta", "Toronto"];

// Create a function 'whereToGo'
    // Loop through the array
        // Alphabetize
            // Print sentence to the console

function whereToGo(array) {
    for (var i = 0; i < array.length; i++) {
        array = array.sort();
        console.log(`The next place I want to visit is ${array[i]}!`);
    }
};

// Call the function
whereToGo(travelDestinations);
