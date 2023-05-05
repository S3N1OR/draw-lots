let boxCount = 1;

let timeId = setInterval(function(){
  const prizeTextarea = document.getElementById('prizesTextarea');
}, 10)

function showPrize(boxNumber) {
    const prizeTextarea = document.getElementById('prizesTextarea');
    const prizeList = prizeTextarea.value.split('\n');
    const prize = prizeList[boxNumber - 1];
    const box = document.getElementById('boxes').children[boxNumber - 1];
    const boxText = document.getElementsByClassName('box-text')[boxNumber -1];
    boxText.classList.add('op');
    boxText.innerText = prize;
    box.classList.add('box-bg-show');
}

function shufflePrizes() {
    const prizeTextarea = document.getElementById('prizesTextarea');
    const prizeList = prizeTextarea.value.split('\n');
    for (let i = prizeList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prizeList[i], prizeList[j]] = [prizeList[j], prizeList[i]];
    }
    prizeTextarea.value = prizeList.join('\n');
}

function hide_show(){
    const prizes = document.querySelector('#prizes');
    prizes.classList.toggle('none');
}

function openAll(){
  var boxes = document.querySelectorAll(".box");
  
  for (var i = 0; i < boxes.length; i++) {
    const box = document.getElementById('boxes').children[i];
    const prizeTextarea = document.getElementById('prizesTextarea');
    const prizeList = prizeTextarea.value.split('\n');
    const prize = prizeList[i];
    boxes[i].innerText = prize;
    box.classList.add('box-bg-show');
  }
}

const prizesTextarea = document.getElementById("prizesTextarea");
function savePrizes() {
  localStorage.setItem("prizes", prizesTextarea.value);
}

if (localStorage.getItem("prizes")) {
  prizesTextarea.value = localStorage.getItem("prizes");
}

function copy() {
  var copyText = 'https://github.com/S3N1OR/draw-lots';

  navigator.clipboard.writeText(copyText);
}

prizesTextarea.addEventListener("input", savePrizes);