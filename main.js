let boxCount = 1;

let timeId = setInterval(function(){
  const prizeTextarea = document.getElementById('prizesTextarea');
}, 10)

function showPrize(boxNumber) {
    const prizeTextarea = document.getElementById('prizesTextarea');
    const prizeList = prizeTextarea.value.split('\n');
    const prize = prizeList[boxNumber - 1];
    const box = document.getElementById('boxes').children[boxNumber - 1];
    box.innerText = prize;
}

// setInterval(() => {
//     updateLocalStorage();
// }, 10);

// function updatePrizes() {
//   const prizeTextarea = document.getElementById('prizesTextarea');
//   const prizeList = prizeTextarea.value.split('\n');
//   if (prizeList.length > boxCount) {
//     prizeList.splice(boxCount);
//     prizeTextarea.value = prizeList.join('\n');
//   } else if (prizeList.length < boxCount) {
//     const diff = boxCount - prizeList.length;
//     for (let i = 0; i < diff; i++) {
//       prizeList.push('');
//     }
//     prizeTextarea.value = prizeList.join('\n');
//     updateLocalStorage();
//   }
// }

function shufflePrizes() {
    const prizeTextarea = document.getElementById('prizesTextarea');
    const prizeList = prizeTextarea.value.split('\n');
    for (let i = prizeList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prizeList[i], prizeList[j]] = [prizeList[j], prizeList[i]];
    }
    prizeTextarea.value = prizeList.join('\n');
    
    // updateLocalStorage();
}

// function getPrizeList() {
//     const prizeTextarea = document.getElementById('prizesTextarea');
//     const prizeList = prizeTextarea.value.split('\n');
//     return prizeList;
// }

// function updateLocalStorage() {
//     localStorage.setItem('prizeList', JSON.stringify(getPrizeList()));
// }

// function loadFromLocalStorage() {
//     const prizeList = JSON.parse(localStorage.getItem('prizeList')) || [];
//     prizeList.forEach((prize, index) => {
//         if (index === 0) {
//             return;
//         }
//     addBox();
//     });
//     const prizeTextarea = document.getElementById('prizesTextarea');
//     prizeTextarea.value = prizeList.join('\n');
// }

function hide_show(){
    const prizes = document.querySelector('#prizes');

    prizes.classList.toggle('none');
}
  
// loadFromLocalStorage();

const prizesTextarea = document.getElementById("prizesTextarea");

if (localStorage.getItem("prizes")) {
  prizesTextarea.value = localStorage.getItem("prizes");
}

function savePrizes() {
  localStorage.setItem("prizes", prizesTextarea.value);
}

prizesTextarea.addEventListener("input", savePrizes);