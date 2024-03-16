// // Створити список
// // Створити кнопки Add, Remove, які будуть змінювати склад списку
// // Створити input, з якого отримаємо значення, що буде передано в li
// // Парним лі вказати жовтий фон, непарним синій
// // Використовуй createElement
// const list = document.createElement("ol");
// const buttonAdd = document.createElement("button");
// const buttonRemove = document.createElement("button");
// const input = document.createElement("input");

// buttonAdd.textContent = "Add";
// buttonRemove.textContent = "Remove";

// document.body.append(input, buttonAdd, buttonRemove, list);

// buttonAdd.addEventListener("click", () => {
//   const inputValue = input.value.trim();
//   if (!inputValue) {
//     iziToast.warning({
//       title: "Caution",
//       message: "Поле має бути заповненим",
//       position: "topRight",
//     });
//     return;
//   }
//   const item = document.createElement("li");
//   item.textContent = inputValue;

//   list.append(item);
//   if (list.children.length % 2 === 0) {
//     item.style.backgroundColor = "yellow";
//   } else {
//     item.style.backgroundColor = "blue";
//   }

//   input.value = "";
// });

// buttonRemove.addEventListener("click", () => {
//   if (list.lastElementChild) {
//     list.lastElementChild.remove();
//   }
// });

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const figure = document.createElement("div");

// changeFigure();

// document.body.append(figure);

// figure.addEventListener("click", changeFigure);

// function changeFigure() {
//   figure.style.cssText = forms[randomither(forms.length)];
//   figure.style.backgroundColor = getRandomHexColor();
//   figure.style.position = "absolute";
//   figure.style.top = `${randomither(100)}%`;
//   figure.style.left = `${randomither(100)}%`;
// }

// / Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let size = 50;

// const markup = `
// <button class="decrement" type="button">Decrement</button>
//     <button class="increment" type="button">Increment</button>
// <div class="box" style="width: ${size}px; height: ${size}px; background-color: red"></div>
//     `;

// document.body.insertAdjacentHTML("beforeend", markup);

// const btnDecrement = document.querySelector(".decrement");
// const btnIncrement = document.querySelector(".increment");
// const box = document.querySelector(".box");

// btnDecrement.addEventListener("click", onDecrement);
// btnIncrement.addEventListener("click", onIncrement);

// function onDecrement() {
//     if (size === 10) {
//         return;
//     }
//     size -= 10;
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
// }

// function onIncrement() {
//     size += 10;
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
// }

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const items = document.querySelectorAll(".listItem");
// const button = document.querySelector("#double");

// button.addEventListener("click", doubleItems); 

// function doubleItems(event) {
//     items.forEach(item => item.textContent *= 2)
// }

// Завдання 16
//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// const messageDiv = document.querySelector("#productDetails");

// table.addEventListener("click", handleClick);

// function handleClick(event) {
//     if (event.target.nodeName !== "TD") return;
//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;
//     messageDiv.textContent = `Ви вибрали ${product} за ${price}`;
// }

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const btnContainer = document.querySelector(".statList");
const btnResult = document.querySelector("#resultButton");
const boxResult = document.querySelector("#resultSection");

btnContainer.addEventListener("click", handleClick);
btnResult.addEventListener("click", showResult);
let totalSum = 0;

function handleClick(event) {
    if (!event.target.classList.contains("calcButton")) return;
    const value = event.target.dataset.number;
    totalSum += Number(value);
    console.log(totalSum);
};

function showResult(event) {
    boxResult.textContent = `Total sum: ${totalSum}`;
    totalSum = 0;
};

