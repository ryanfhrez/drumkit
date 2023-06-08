// document.querySelectorAll("button").addEventListener("click", clickedButton);

// function clickedButton() {
//   alert("i clicked!");
// }

// document.querySelectorAll("button")[0].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[1].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[2].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[3].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[4].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[5].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[6].addEventListener("click", ShowAlert);
// document.querySelectorAll("button")[7].addEventListener("click", ShowAlert);

// detecting Click Button Press

var numberOfDrums = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfDrums; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", showSoundClick);
}

function showSoundClick() {
  var buttonInnerHTML = this.innerHTML;

  keyboardSound(buttonInnerHTML);
  buttonAnimation(this.innerHTML);
}

// detecting keyboard Press

document.addEventListener("keypress", function (event) {
  keyboardSound(event.key);
  buttonAnimation(event.key);
});

function keyboardSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      buttonInnerHTML;
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey).classList;
  activeButton.add("pressed");

  setTimeout(function () {
    activeButton.remove("pressed");
  }, 100);
}

// function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
//   this.yearOfExperience = yearOfExperience;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
//   this.msg = function () {
//     alert("cleanning its running for now..");
//   };
// }

// var housekeeper1 = new HouseKeeper(12, "jubaedah", [
//   "bathroom",
//   "bedroom",
//   "pool",
// ]);

// housekeeper1.msg();
