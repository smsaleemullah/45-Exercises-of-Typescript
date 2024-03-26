//Magicians: Make an array of magician's names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician = ["harry", "hermione", "ron"];
// show_magicians(magician)
// Task 42
//Great Magicians:Start with a copy of your program from Exercise 39. write a function called make_great() that modifies
//the array of magicians by adding the phrase the Great to each magician's name. Call show_magicians() to see that the list 
// has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["harry", "hermione", "ron"];
make_great(magicians2);
show_magicians(magicians2);
