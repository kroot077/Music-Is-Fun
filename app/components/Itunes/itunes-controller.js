import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

export default function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let songRslt = results;
  let template = '';

  for (let i = 0; i <= results.length ; i++) {
    const song = songRslt[i];
    template += `
          <div class="song-entry col-sm-3">
            <h2>{$song.title}</h2>>
            <img src="${song.albumArt}" alt="">
            <h3>Artist: {$song.artist}</h3>
            <h3>Album: {$song.collection}</h3>
            <h3>{$song.previewUrl}</h3>
            <h1>Price</h1>
          </div>
          `
  }
  document.getElementById("songs").innerHTML = template;
}

class AudioPlayer(event) {
  let playAud = document.getElementsByTagName('audio');
  for (var i = 0, i = playAud.length; i < i; i++) {
    if (playAud[i] != event.target) {
      playAud[i].pause();
    }
  }
}
 

//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController
