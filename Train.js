// Write a message to the console.
// console.log('hello world!');
let money, date;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    date = prompt("Введите дату в формате YYYY-MM-DD", "1985-06-22");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    butget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

function chooseExpences() {
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
}

chooseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.butget / 30).toFixed();
    alert("Ежедневный бютжет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay>100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Error");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings==true) {
        let save = +prompt("Какова сумма накоплений?", "120000"),
        percent = +prompt("Под какой процент?", "8");

        appData.monthIncome = save/1200*percent;
        alert("доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for(let i=0; i<3; i++) {
        let optexp = prompt("Статья необязательных расходов?", "Entertaiment");
            if ((typeof(optexp)) === "string" && (typeof(optexp) != null)) {
                appData.optionalExpenses[i+1] = optexp;
            } else {
                alert("Заполните пожалуйста все поля!");
                i--;
            }    
    }
}
chooseOptExpenses();

console.log(appData.optionalExpenses);
