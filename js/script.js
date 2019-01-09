/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Rewind Youtube Style 2012",
    "Youtube Rewind: What Does 2013 Say?",
    "Youtube Rewind: Turn Down for 2014",
    "Youtube Rewind: Now Watch Me 2015",
    "Youtube Rewind: The Ultimate 2016 Challenge",
    "Youtube Rewind: The Shape of 2017",
    "Youtube Rewind: Everyone Controls 2018"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
    "https://www.tubefilter.com/wp-content/uploads/2017/12/rewind-youtube-style-2012.jpg",
    "https://tubularinsights.com/wp-content/uploads/2013/12/youtube-rewind-201.jpg",
    "https://i.ytimg.com/vi/zKx2B8WCQuw/maxresdefault.jpg",
    "http://theinspirationroom.com/daily/musicvideos/2015/12/youtube_rewind_dancers.jpg",
    "https://i.ytimg.com/vi/_GuOjXYl5ew/maxresdefault.jpg",
    "https://i.ytimg.com/vi/FlsCjmMhFmw/maxresdefault.jpg",
    "https://images.indianexpress.com/2018/12/youtube-rewind-2018-759.jpg"
];

var artists = [
    "Youtube",
    "Youtube",
    "Youtube",
    "Youtube",
    "Youtube",
    "Youtube",
    "Youtube",
];

var lengths = [
    "4:15",
    "5:14",
    "6:36",
    "6:40",
    "6:53",
    "7:15",
    "8:13"
];

var links = [
    "https://www.youtube.com/watch?v=iCkYw3cRwLo&list=PLlRxoZsNVok1pGHb99u51LYGCk7Uihs64&t=0s&index=5",
    "https://www.youtube.com/watch?v=H7jtC8vjXw8",
    "https://www.youtube.com/watch?v=zKx2B8WCQuw&list=PLlRxoZsNVok1pGHb99u51LYGCk7Uihs64&t=0s&index=4",
    "https://www.youtube.com/watch?v=KK9bwTlAvgo&list=PLlRxoZsNVok1pGHb99u51LYGCk7Uihs64&t=0s&index=3",
    "https://www.youtube.com/watch?v=_GuOjXYl5ew",
    "https://www.youtube.com/watch?v=FlsCjmMhFmw&list=PLlRxoZsNVok1pGHb99u51LYGCk7Uihs64&t=0s&index=2",
    "https://www.youtube.com/watch?time_continue=3&v=YbJOTdZBX1g"
];

function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    
    images_links.forEach(function(image){
        var textElement = `<img src = ${image}>`;
        $("#images").append(textElement);
    });
    
    artists.forEach(function(artist){
        $("#artists").append("<p>" + artist + "</p>");
    });
    
    lengths.forEach(function(length){
       $("#lengths").append("<p>" + length + "</p>"); 
    });
    
    links.forEach(function(link){
       $("#links").append("<a>" + link + "</a>");
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var imageName = $("#image").val();
    images_links.push(imageName);
    console.log(images_links);
    var artistName = $("#artist").val();
    artists.push(artistName);
    
    var lengthTime = $("#length").val();
    lengths.push(lengthTime);
    
    var linkName = $("#link").val();
    links.push(linkName);
}

$("#delete").click(function(){
    emptySongInfo();
});

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

