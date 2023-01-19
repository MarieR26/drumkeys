const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //stop the function all together

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //stop the function all together

  if (!audio) return;

  audio.currentTime = 0; //rewind to the start

  audio.play();

  key.classList.add("playing");
}

function removeTransform(e) {
  if (e.propertyName !== "transform") return; //we make sure we only choose transform in the class;

  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
