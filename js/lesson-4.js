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
