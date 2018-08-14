import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

export default function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let songRslt = ItunesService.getMusicByArtist();
  let template = ``;

  for (let i = 0; i <= 50 ; i++) {
    const song = songRslt[i];
    template += `
          <div class="song-entry col-sm-3">
            <h2>{$song.trackName}</h2>
            <h2>{$song.collectionPrice}</h2>
            <img src="${song.albumArt}" alt="">
            <h3>Artist: {$song.artistName}</h3>
            <h3>Album: {$song.collectionName}</h3>
            <h3>{$song.previewUrl}</h3>
          </div>
          `
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