// Task 41
//Magicians: Make an array of magician's names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
function show_magicians(Magicians) {
    for (const magician of Magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["harry", "hermione", "ron"];
show_magicians(magician);
// Task 43
// Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians' 
//names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() withh each array to show that you have one array of the original names and one array witn the Great added
// to each magician's name
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
const magicians3 = ["harry", "hermione", "ron"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
export {};
