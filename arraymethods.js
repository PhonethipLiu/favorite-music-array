// * Create and modify arrays with join, push, reverse, sort, concat and unshift.

// Create three separate arrays; one for songs, one for albums, and one for artists.

const songs = [ "Come Away With Me", "Uptown Funky", "At Last", "Ain't No Sunshine", "Love", "Sexy Back", "Rolling In The Deep", "Back To Black ", "Fell In Love With A Boy", "Work It"], // *The song array should be initialized with 10 songs.

artists = [ "Norah Jones", "Mark Ronson with Bruno Mars", "Eta James", "Bill Withers", "Matt White", "Justin Timberlake", "Adelle", "Amy Winehouse", "Joss Stone", "Miss Elliott"  ], // *Each subsequent array should hold the corresponding data (artist and album).

albums = ["Come Away With Me, 2002", "Uptown Special, 2015", "At Last!, 1960", "Just as I am, 1971" ,"Best Days, 2007","Futuresex/Lovesounds, 2006", "Adele 21, 2011", "Back to Black, 2006", "The Soul Sessions, 2003", "Under Construction, 2002"];

// * Output lists to the DOM.
var printSongs = document.getElementById("songs"),
    printArtists = document.getElementById("artists"),
    printAlbums = document.getElementById("albums");

// Sort list    
let sortSongA = songs.sort().join("<br>"),
    sortSongD = songs.reverse().join("<br>");

let sortArtistsA = artists.sort().join("<br>"),
    sortArtistsD = artists.reverse().join("<br>");

let sortAlbumsA = albums.sort().join("<br>"),
    sortAlbumsD = albums.reverse().join("<br>");

// console.log("Songs sorted in descending order", sortSongA);

// Pring to DOM

// Output vertically descending alphabetically & ascending alphabetically.
// Output horizontally descending alphabetically, separated by `, ` & ascending alphabetically, separated by ` >> `.
printSongs.innerHTML = `<h5>Ascending order</h5> <p>${sortSongA} </p> <h5>Descending order</h5> <p>${sortSongD}</p> <hr>
<h5>Ascending order</h5> <p>${songs.sort().join(" >> ")} </p> <h5>Descending order</h5> <p>${songs.sort().reverse().join(", ")}</p> `;

printArtists.innerHTML = `<h5>Ascending order</h5> <p>${sortArtistsA} </p> <h5>Descending order</h5> <p>${sortArtistsD}</p> <hr>
<h5>Ascending order</h5> <p>${artists.sort().join(" >> ")} </p> <h5>Descending order</h5> <p>${artists.reverse().join(", ")}</p>`;

printAlbums.innerHTML = `<h5>Ascending order</h5> <p>${sortAlbumsA} </p> <h5>Descending order</h5> <p>${sortAlbumsD}</p><hr>
<h5>Ascending order</h5> <p>${albums.sort().join(" >> ")} </p> <h5>Descending order</h5> <p>${albums.reverse().join(", ")}</p>`;



// * For each output element arrange the corresponding data as follows:

//     *   Output vertically exactly as the data was added.
//     *   Output vertically exactly as the data was added, inverted.

//     *   Output horizontally exactly as the data was added, separated by ` : `.
//     *   Output horizontally exactly as the data was added, inverted, separated by ` | `.
// * Each output area should be separated by a headline tag.
let addSong = document.getElementById("song--input"),
    addArtist = document.getElementById("song--artist"),
    addAlbum = document.getElementById("song--album");

function displayNewSong(){
    addSong.printSongs.innerHTML += songs.push();
}
console.log(displayNewSong);