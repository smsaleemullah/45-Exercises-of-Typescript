// Creating an Array with 5 Values
let userNames = ["Ilja", "Mariya", "Aiman", "Admin", "Saba"];
// Remove all values from our Array Now our Array is empty
userNames = [];
// if Statement for checking Length of our Array is empty?
if (userNames.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    // If Array is not empty Use ForEach Loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
export {};
