// Write a message to the console.
// console.log('hello world!');
// let money = +prompt("Ваш бюджет на месяц?", ""),
//     date = prompt("Введите дату в формате YYYY-MM-DD", "1985-06-22");

// let appData = {
//     butget: money,
//     timeData: date,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// }

// let exp1 = prompt("Введите обязательную статью расходов в этом месяце", "food"),
//     howMuch1 = prompt("Во сколько обойдется?", " "),
//     exp2 = prompt("Введите обязательную статью расходов в этом месяце", "relax"),
//     howMuch2 = prompt("Во сколько обойдется?", " ");

// console.log(exp1);
// console.log(exp2);

// appData.expenses.exp1 = howMuch1;
// appData.expenses.exp2 = howMuch2;

// console.log(appData.expenses.exp1);
// console.log(exp1);

// alert(appData.butget / 30);

let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.expenses);

alert(appData.budget / 30);