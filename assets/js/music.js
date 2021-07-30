var songs = ['assets/mp3/bg.mp3', 'assets/mp3/gasolina.mp3', 'assets/mp3/candy.mp3', 'assets/mp3/touch.mp3', 'assets/mp3/crazy.mp3', 'assets/mp3/009.mp3', 'assets/mp3/toxic.mp3', 'assets/mp3/good.mp3', 'assets/mp3/sexy.mp3', 'assets/mp3/samba.mp3', 'assets/mp3/lonely.mp3', 'assets/mp3/bruce.mp3', 'assets/mp3/blue.mp3', 'assets/mp3/bailando.mp3', 'assets/mp3/gigi.mp3', 'assets/mp3/muza.mp3', 'assets/mp3/yung.mp3',];

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