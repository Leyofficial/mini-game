let firstCard = "";
let secondCard = "";
let firstCardComputer = "";
let secondCardComputer = "";
let computerTotal = "";

let computerTry = (max) => {
    firstCardComputer = Math.floor(Math.random() * max);
    alert(`Первая попытка крупье : ${firstCardComputer}`);
    secondCardComputer = Math.floor(Math.random() * max);
    alert(`Вторая попытка крупье : ${secondCardComputer}`);
    computerTotal = firstCardComputer + secondCardComputer;
    alert(`Всего сумма у круппье : ${computerTotal}`);
}

// // const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

const computer = (max) => {
   
  firstCard = Math.floor(Math.random() * max);
  console.log(firstCard)
  alert(`Первое выповшее число у user это : ${firstCard}`)
  const askCard = prompt("Вы хотите оставить или взять еще одно?");

  if (askCard === "Оставить") {
    computerTry(23);
      if (computerTotal < firstCard || computerTotal > 23) {
        alert(`Вы выиграли!`);
      }
       else {
        alert(`Вы проиграли!`);
      }
      
  }
  if (askCard === "Еще") {
    let userTry = (max) => {
      secondCard = Math.floor(Math.random() * max);
      alert(`Второе выповшее число у user это : ${secondCard}`)
      const userTotal = firstCard + secondCard;
      alert(`Всего сумма у user : ${userTotal}`);
      computerTry(23)
      if (userTotal <= 23 && userTotal>computerTotal || computerTotal > 23 ){
        alert(`Повезло : ${userTotal} > ${computerTotal}`);
      }
      else {
        alert(`Вы проиграли : ${userTotal} < ${computerTotal}`);
      }
    };
    userTry(23);
  }
};
computer(23);