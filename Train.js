// Write a message to the console.
// console.log('hello world!');
let money = +prompt("Ваш бюджет на месяц?", ""),
    date = prompt("Введите дату в формате YYYY-MM-DD", "1985-06-22");

let appData = {
    butget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for(let i=0; i<2; i++) {
    let exp = prompt("Введите обязательную статью расходов в этом месяце", "food"),
        howMuch = +prompt("Во сколько обойдется?", " ");
        if ((typeof(exp)) === "string" && (typeof(exp) != null) && (typeof(howMuch) != null) 
            && exp!='' && howMuch!='' && exp.length < 50) {
            console.log("done")    ;
            appData.expenses[exp] = howMuch;
        } else {
            alert("Заполните пожалуйста все поля!");
            i--;
        }    
}

appData.moneyPerDay = appData.butget / 30;

alert("Ежедневный бютжет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay>100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Error");
}

