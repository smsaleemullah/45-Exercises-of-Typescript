// Task 35
// Animal: Think of atleast three different animals that have a common characteristic.Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal.Modify your program to print a statement about each animal, such
// as a dog would make a great pet. Add a line at the end of your program stating what these animal have in common. You could print
// a sentence such as Any of these animal would make a great pet!
let animals = ["cow", "sheep", "goat"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(` A ${animal} is a herbivore`);
}
console.log("\n all of these are great pets!");
export {};
