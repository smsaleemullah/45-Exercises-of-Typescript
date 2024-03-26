// Task 40:
// Album: Write a function called make_album() that builds an object describing a music album. The function should take in an artist
// name and an album title, and it should return an Object containing these two pieces of information. Use the function to make
// three dictionaries representing different albums. Print each return value to show that Objects are storing the album
// information correctly. Add an optional parameter to make album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks,add that value to the album's Object. Make at least one new
// function call that includes the number of tracks on an album. 
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album("atif aslam", "hamyein pyar hay Pakistan se");
console.log(album);
album = make_album("shakira", "try everything");
console.log(album);
album = make_album("idina menzel", "let it go");
console.log(album);
