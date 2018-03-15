// * Create and modify arrays with join, push, reverse, sort, concat and unshift. Create three separate arrays; one for songs, one for albums, and one for artists.

// *Each subsequent array should hold the corresponding data (artist and album). The song array should be initialized with 10 songs.


var songs = [ "Come Away With Me", "Uptown Funky", "At Last", "Ain't No Sunshine", "Love", "Sexy Back", "Rolling In The Deep", "Back To Black ", "Fell In Love With A Boy", "Work It"], 

artists = [ "Norah Jones", "Mark Ronson with Bruno Mars", "Eta James", "Bill Withers", "Matt White", "Justin Timberlake", "Adelle", "Amy Winehouse", "Joss Stone", "Miss Elliott"  ], 

albums = ["Come Away With Me", "Uptown Special", "At Last!", "Just as I am" ,"Best Days","Futuresex/Lovesounds", "Adele 21", "Back to Black", "The Soul Sessions", "Under Construction"];

var printSongs = document.getElementById("songs"),
    printArtists = document.getElementById("artists"),
    printAlbums = document.getElementById("albums");

var addSong = document.getElementById("song--input"),
    addArtist = document.getElementById("artist--input"),
    addAlbum = document.getElementById("album--input");

// button eventlister for newly added songs, artist and albums
var btn = document.getElementById("add--btn"),
    clear = document.getElementById("clear--btn");

btn.addEventListener("click", add);
clear.addEventListener("click", clearBtn);

function clearBtn () {
    addSong.value = "";
    addArtist.value = "";
    addAlbum.value = "";
};

function add(event) {
    
    songs.push(`${addSong.value}`);
    artists.unshift(`${addArtist.value}`);
    albums.push(`${addAlbum.value}`);

    printSongs.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${songs.sort().join("<br>")} </p> 
        <h5>Descending order</h5> 
        <p>${songs.reverse().join("<br>")}</p> 
        <hr>
        <h5>Ascending order</h5> 
        <p>${songs.join(" : ")} </p> 
        <h5>Descending order</h5> 
        <p>${songs.reverse().join(" | ")}</p> `;

    printArtists.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${artists.sort().join("<br>")} </p> 
        <h5>Descending order</h5> 
        <p>${artists.reverse().join("<br>")}</p> 
        <hr>
        <h5>Ascending order</h5> 
        <p>${artists.join(" : ")} </p> 
        <h5>Descending order</h5> 
        <p>${artists.reverse().join(" | ")}</p>`;

    printAlbums.innerHTML = `
        <h5>Ascending order</h5> 
        <p>${albums.sort().join("<br>")} </p> 
        <h5>Descending order</h5> 
        <p>${albums.reverse().join("<br>")}</p>
        <hr>
        <h5>Ascending order</h5> 
        <p>${albums.join(" : ")} </p> 
        <h5>Descending order</h5> 
        <p>${albums.reverse().join(" | ")}</p>`;
    
    console.log("addSong event:", songs, artists, albums); 
};


// Print to DOM : Output vertically descending alphabetically & ascending alphabetically. Output horizontally descending alphabetically, separated by `, ` & ascending alphabetically, separated by ` >> `.

// function  printToDom (){
    printSongs.innerHTML = `
    <h5>Ascending order</h5> 
    <p>${songs.sort().join("<br>")} </p> 
    <h5>Descending order</h5> 
    <p>${songs.reverse().join("<br>")}</p> 
    <hr>
    <h5>Ascending order</h5> 
    <p>${songs.sort().join(" >> ")} </p> 
    <h5>Descending order</h5> 
    <p>${songs.reverse().join(", ")}</p> `;

printArtists.innerHTML = `
    <h5>Ascending order</h5> 
    <p>${artists.sort().join("<br>")} </p> 
    <h5>Descending order</h5> 
    <p>${artists.reverse().join("<br>")}</p> 
    <hr>
    <h5>Ascending order</h5> 
    <p>${artists.sort().join(" >> ")} </p> 
    <h5>Descending order</h5> 
    <p>${artists.reverse().join(", ")}</p>`;

printAlbums.innerHTML = `
    <h5>Ascending order</h5> 
    <p>${albums.sort().join("<br>")} </p> 
    <h5>Descending order</h5> 
    <p>${albums.reverse().join("<br>")}</p>
    <hr>
    <h5>Ascending order</h5> 
    <p>${albums.sort().join(" >> ")} </p> 
    <h5>Descending order</h5> 
    <p>${albums.reverse().join(", ")}</p>`;
// };
   

// // Sort list    
// var sortSongA = songs.sort().join("<br>"),
//     sortSongD = songs.reverse().join("<br>"),
//     sortSongAh = songs.sort().join(" >> "),
//     sortSongDh = songs.reverse().join(", ");

// var sortArtistsA = artists.sort().join("<br>"),
//     sortArtistsD = artists.reverse().join("<br>"),
//     sortArtistsAh = artists.sort().join(" >> "),
//     sortArtistsDh = artists.reverse().join(", ");

// var sortAlbumsA = albums.sort().join("<br>"),
//     sortAlbumsD = albums.reverse().join("<br>"),
//     sortAlbumsAh = albums.sort().join(" >> "),
//     sortAlbumsDh = albums.reverse().join(", ");
 
