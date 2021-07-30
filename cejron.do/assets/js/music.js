var songs = ['assets/mp3/borciuchy.mp3', 'assets/mp3/donastepnego.mp3', 'assets/mp3/golec.mp3', 'assets/mp3/muszetomiec.mp3', 'assets/mp3/patoraban.mp3', 'assets/mp3/telefony.mp3', 'assets/mp3/traphouse.mp3', 'assets/mp3/trendsetter.mp3', 'assets/mp3/yomenik.mp3',];

var counter = 0;
             
playSong();

function setCounter(i) {
    if (i < 0) {
        i = songs.length + (i % songs.length);
    } else {
        i = i % songs.length;
    }
    
    counter = i;
};

function prevSong() {
  setCounter(counter - 1);
  playSong();
};

function nextSong() {
  setCounter(counter + 1);
  playSong();
};

function playSong(){
  var newSong = songs[counter];
  var player = document.getElementById('audio');
  player.setAttribute('src', newSong);
  player.volume = 0.32137;
};