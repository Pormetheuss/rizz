let slider = document.getElementById("slider");
let selector = document.getElementById("selector")
let SelectValue = document.getElementById("SelectValue");
let play = document.getElementById("play");
let audio = new Audio("beep-07a.mp3");
let max = new Audio("Sound.m4a");
let text = document.querySelector(".text");

max.playbackRate = 1.5;

SelectValue.innerHTML = slider.value;

slider.oninput = function(){
    SelectValue.innerHTML = this.value;
    selector.style.left = this.value + "%";
}


slider.addEventListener("input", function(){
    if (parseInt(slider.value) > 0) {
        audio.loop = true;
        audio.playbackRate = parseInt(slider.value)/10;
        audio.play();
      } else{
        audio.loop = false;
        audio.pause();
        audio.currentTime = 0;
      }
    if (parseInt(slider.value) == 100){
      max.loop = true;
      max.play();
      text.innerText = "RIZZLER DETECTED";
      text.classList.add("on");
      text.classList.remove("text");
    }
    else
    {
      max.loop = false;
      max.pause();
      max.currentTime = 0;
      text.innerText = "Press the button below to begin detecting Rizzlers";
      text.classList.add("text");
      text.classList.remove("on");
    }
})


