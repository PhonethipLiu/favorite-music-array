// * Create and modify arrays with join, push, reverse, sort, concat and unshift.

// Create three separate arrays; one for songs, one for albums, and one for artists.

// document.addEventListener ("onload", printToDom);

var songs = [ "Come Away With Me", "Uptown Funky", "At Last", "Ain't No Sunshine", "Love", "Sexy Back", "Rolling In The Deep", "Back To Black ", "Fell In Love With A Boy", "Work It"], // *The song array should be initialized with 10 songs.

artists = [ "Norah Jones", "Mark Ronson with Bruno Mars", "Eta James", "Bill Withers", "Matt White", "Justin Timberlake", "Adelle", "Amy Winehouse", "Joss Stone", "Miss Elliott"  ], // *Each subsequent array should hold the corresponding data (artist and album).

albums = ["Come Away With Me", "Uptown Special", "At Last!", "Just as I am" ,"Best Days","Futuresex/Lovesounds", "Adele 21", "Back to Black", "The Soul Sessions", "Under Construction"];

var printSongs = document.getElementById("songs"),
    printArtists = document.getElementById("artists"),
    printAlbums = document.getElementById("albums");

var addSong = document.getElementById("song--input"),
    addArtist = document.getElementById("artist--input"),
    addAlbum = document.getElementById("album--input");

var btn = document.getElementById("add--btn");
    btn.addEventListener("click", add);

function add(event) {
    songs.push(`${addSong.value}`);
    artists.unshift(`${addArtist.value}`);
    albums.push(`${addAlbum.value}`);
    // printToDom ();   /* wanted to call a function once the array is updated*/ 
    
};

console.log("addSong event:", songs, albums, artists);


// Sort list    
    var sortSongA = songs.sort().join("<br>"),
        sortSongD = songs.reverse().join("<br>"),
        sortSongAh = songs.sort().join(" >> "),
        sortSongDh = songs.reverse().join(", ");

    var sortArtistsA = artists.sort().join("<br>"),
        sortArtistsD = artists.reverse().join("<br>"),
        sortArtistsAh = artists.sort().join(" >> "),
        sortArtistsDh = artists.reverse().join(", ");

    var sortAlbumsA = albums.sort().join("<br>"),
        sortAlbumsD = albums.reverse().join("<br>"),
        sortAlbumsAh = albums.sort().join(" >> "),
        sortAlbumsDh = albums.reverse().join(", ");


// Print to DOM : Output vertically descending alphabetically & ascending alphabetically. Output horizontally descending alphabetically, separated by `, ` & ascending alphabetically, separated by ` >> `.

// function  printToDom (){
    printSongs.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${sortSongA} </p> 
        <h5>Descending order</h5> 
        <p>${sortSongD}</p> 
        <hr>
        <h5>Ascending order</h5> 
        <p>${sortSongAh} </p> 
        <h5>Descending order</h5> 
        <p>${sortSongDh}</p> `;

    printArtists.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${sortArtistsA} </p> 
        <h5>Descending order</h5> 
        <p>${sortArtistsD}</p> 
        <hr>
        <h5>Ascending order</h5> 
        <p>${sortArtistsAh} </p> 
        <h5>Descending order</h5> 
        <p>${sortArtistsDh}</p>`;

    printAlbums.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${sortAlbumsA} </p> 
        <h5>Descending order</h5> 
        <p>${sortAlbumsD}</p>
        <hr>
        <h5>Ascending order</h5> 
        <p>${sortAlbumsAh} </p> 
        <h5>Descending order</h5> 
        <p>${sortAlbumsDh}</p>`;
// };
   


 
// * For each output element arrange the corresponding data as follows: Output vertically exactly as the data was added, then reverted. Output horizontally exactly as the data was added, separated by ` : ` ; then separated by ` | `.

//     printSongs.innerHTML = `<h5>Ascending order</h5> <p>${sortSongA} </p> <h5>Descending order</h5> <p>${sortSongD}</p> <hr>
// <h5>Ascending order</h5> <p>${songs.sort().join(" : ")} </p> <h5>Descending order</h5> <p>${songs.sort().reverse().join(" | ")}</p> `;

// printArtists.innerHTML = `<h5>Ascending order</h5> <p>${sortArtistsA} </p> <h5>Descending order</h5> <p>${sortArtistsD}</p> <hr>
// <h5>Ascending order</h5> <p>${artists.sort().join(" :")} </p> <h5>Descending order</h5> <p>${artists.reverse().join(" | ")}</p>`;

// printAlbums.innerHTML = `<h5>Ascending order</h5> <p>${sortAlbumsA} </p> <h5>Descending order</h5> <p>${sortAlbumsD}</p><hr>
// <h5>Ascending order</h5> <p>${albums.sort().join(" : ")} </p> <h5>Descending order</h5> <p>${albums.reverse().join(" | ")}</p>`;


