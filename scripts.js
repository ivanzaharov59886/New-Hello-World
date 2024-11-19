var btn =document.getElementById('hello_world');

var flag=false;

function playAudio(url) {
 
if (!flag){
  var audio = new Audio(url);

  
  audio.loop=true;
  audio.play();
  flag=true;}
}

document.getElementById("hello_image").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Happy New Year";
  });



  function toggleMusic() {
    var audio = document.getElementById('music');
    var img = document.getElementById('music-toggle');
    var container = document.getElementById('hello_image');

    if (audio.paused) {
        audio.play();
        // Меняем картинку на другую, если музыка включена
        img.src = 'images/moon.png';
        // Меняем фон на черный
        container.style.backgroundColor = 'black';
    } else {
        audio.pause();
        // Меняем картинку обратно, если музыка выключена
        img.src = 'images/sun.png';
        // Меняем фон на голубой
        container.style.backgroundColor = 'deepskyblue';
    }
}