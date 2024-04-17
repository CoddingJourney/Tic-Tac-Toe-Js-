let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#wi-msg");
let turnO = true; //playerX, playerO
let count = 0; //To Track Draw
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide"); //new game winner wala msg haru hide garxa by enabling or adding class hide in css
};
boxes.forEach((newBox) => {
  newBox.addEventListener("click", () => {
    if (turnO) {
      // for player O
      newBox.innerText = "O";
      turnO = false;
    } else {
      // for player X
      newBox.innerText = "X";
      turnO = true;
    }
    newBox.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
let gameDraw = () => {
  msg.innerHTML = "The Game is Draw";
  msgContainer.classList.remove("hide"); // hide class remove garerw msg show garxa yo msg show garna ko lagi use hunxa dispaly:none gareko condition maa
  disableBoxes();
};

disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulation!!, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;
    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        showWinner(pos1Value);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
