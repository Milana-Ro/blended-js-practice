"use strict";

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// const elementIndex = styles.indexOf("Блюз");
// styles[elementIndex] = "Класика";

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);
//
//
//
//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}:${user[key]}`);
// }

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogins(arr) {
//   const login = prompt("Input login");
//   // for (const element of arr) {
//   //   if (element === login) {

//   //     return "Доступ дозволено";
// // }

//   // }
//   // return "Користувач не знайден";
// //   if (arr.includes(login)) {
// //     return "Доступ дозволено";
// // }
//   // return "Користувач не знайден";

//   return arr.includes(login) ? "Доступ дозволено" : "Користувач не знайден";

// }

// console.log( checkLogins(logins));

//2. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;
// let values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumPush(array) {
//   const resultArray = [];
//   const sum = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     resultArray.push(array[i] + array[i + 1]);
//   }
//   return resultArray;
//   // return array.map((a, b, arr) => a + arr[b + 1]);
// }

// console.log(sumPush(someArr));

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (this.valueA && this.valueB) {
//       return this.valueA + this.valueB;
//     }
//     return 'Значення не існує!';
//   },
//   mult() {
//     if (!this.valueA || !this.valueB || typeof this.valueA !== 'number') {
//       return 'Значення не існує!'
//     }
//     return this.valueA * this.valueB;
//   }
// }

// calculator.read(5);

// console.log(calculator.sum());
// console.log(calculator.mult());

//
//

//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
  //поточний баланс рахунка
  balance: 0,

  //Історія транзакцій
  transactions: [],

  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    transaction.id = amount + (this.transactions.length + 1);
    this.transactions.push(transaction);
  },

  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає йогого в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("недостатньо коштів на рахунку");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    transaction.id = amount + (this.transactions.length + 1);
    this.transactions.push(transaction);
  },

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {},

  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {},
};

account.deposit(10000);
account.deposit(2000);
account.withdraw(5000);
console.log(account);
