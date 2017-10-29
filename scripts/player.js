audioPlayer();
function audioPlayer() {
  var currentSong = 0;
  $("#audioPlayer")[0].src = $("#playlist li a")[0];
  $("#audioPlayer")[0].play();
  $("#playlist li a").click(function(e){
    e.preventDefault();
    $("#audioPlayer")[0].src = this;
    $("#audioPlayer")[0].play();
    $("#playlist li").removeClass("current-song");
    currentSong = $(this).parent().index();
    $(this).parent().addClass("current-song");
  });

  $("#audioPlayer")[0].addEventListener("ended", function(){
    currentSong++;
    if(currentSong == $("#playlist li a").length)
    currentSong = 0;
    $("#playlist li").removeClass("current-song");
    $("#playlist li:eq("+currentSong+")").addClass("current-song");
    $("#audioPlayer") [0].src = $("#playlist li a")[currentSong].href;
    $("#audioPlayer")[0].play();
  })
}
$("#playlist").hide();
var boton = document.getElementById("botoncito");
boton.addEventListener("click", ocultarPlaylist);

function ocultarPlaylist(){
  $("#playlist").hide();
}

var vista = document.getElementById("vista");
vista.addEventListener("click", visualisarPlaylist);

function visualisarPlaylist(){
  $("#playlist").fadeIn("fast");
}
