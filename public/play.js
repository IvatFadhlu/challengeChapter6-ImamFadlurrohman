const playerOptions = document.querySelectorAll(".optionPlayerSatu li");
const comOptions = document.querySelectorAll(".optionComputer li");
const resultEl = document.querySelector("#result");
const playerResult = result.querySelector(".playerWin");
const comResult = result.querySelector(".comWin");
const drawResult = result.querySelector(".draw");
const refreshButton = document.querySelector("#refresh");
// const comHover = result.document.querySelectorAll(".optionComputer");

// bot brain
function generateComOption() {
  const options = ["optionBatu2", "optionKertas2", "optionGunting2"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// win lose calculation
function determineResult(player, com) {
  if (
    (player == "optionKertas" && com == "optionGunting2") ||
    (player == "optionGunting" && com == "optionBatu2") ||
    (player == "optionBatu" && com == "optionKertas2")
  ) {
    return "comWin";
  } else if (
    (player == "optionKertas" && com == "optionBatu2") ||
    (player == "optionGunting" && com == "optionKertas2") ||
    (player == "optionBatu" && com == "optionGunting2")
  ) {
    return "playerWin";
  } else {
    return "draw";
  }
}

// show or hide class option
// playerOptions.forEach((option, index) => {
//   option.addEventListener("click", () => {
//     const playerChoice = option.classList[0];
//     const comChoice = generateComOption();

//     playerOptions.forEach((option) => {
//       option.classList.remove("active");
//     });
//     comOptions.forEach((option) => {
//       option.classList.remove("active");
//     });

//     option.classList.add("active");
//     comOptions[index].classList.add("active");

//     const result = determineResult(playerChoice, comChoice);

// show or hide .class optiion fix
playerOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    playerOptions.forEach((option) => {
      option.classList.remove("active");
    });
    comOptions.forEach((option) => {
      option.classList.remove("active");
    });

    option.classList.add("active");
    comOptions[index].classList.add("active");

    displayResult(option);
  });
});

function displayResult(option) {
  const playerChoice = option.classList[0];
  const comChoice = generateComOption();
  const result = determineResult(playerChoice, comChoice);

  console.log("com : " + comChoice);
  console.log("player: " + playerChoice);
  console.log("result: " + result);

  // show & hide .class result game
  // if (result == "player") {
  //   playerResult.style.display = "block";
  //   comResult.style.display = "none";
  //   drawResult.style.display = "none";
  //   // comHover.style.display = "block";
  // } else if (result == "com") {
  //   playerResult.style.display = "none";
  //   comResult.style.display = "block";
  //   drawResult.style.display = "none";
  //   // comOptions.classList.add("hover");
  //   // comHover.style.display = "block";
  // } else {
  //   playerResult.style.display = "none";
  //   comResult.style.display = "none";
  //   drawResult.style.display = "block";
  //   // comHover.style.display = "block";
  // }

  // show & hide .class result game fix
  setTimeout(function () {
    if (document.getElementsByClassName("show").length)
      document.getElementsByClassName("show")[0].classList.remove("show");
    if (document.getElementsByClassName("selected").length)
      document
        .getElementsByClassName("selected")[0]
        .classList.remove("selected");

    document.getElementsByClassName("vs")[0].style.display = "none";
    document.getElementsByClassName(result)[0].classList.add("show");
    document.getElementsByClassName(comChoice)[0].classList.add("selected");
  }, 500);
}

//refresh button
function resetGame() {
  // playerResult.textContent = "0";
  // comResult.textContent = "0";
  // drawResult.textContent = "0";
  if (document.getElementsByClassName("show").length)
    document.getElementsByClassName("show")[0].classList.remove("show");
  if (document.getElementsByClassName("selected").length)
    document.getElementsByClassName("selected")[0].classList.remove("selected");
  document.getElementsByClassName("vs")[0].style.display = "block";
}

refreshButton.addEventListener("click", () => {
  resetGame();
});

//end...
