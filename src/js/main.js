'use strict'
let btn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    inputPole = document.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    btnConfirm = document.getElementsByTagName("button")[1],
    btnCount = document.getElementsByTagName("button")[2],
    fieldOption = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, date;
function start() {   
    money = +prompt("Ваш бюджет на месяц?", ""),
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
    savings: false,
    chooseExpences: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.butget / 30).toFixed();
        alert("Ежедневный бютжет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay>100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings==true) {
            let save = +prompt("Какова сумма накоплений?", "120000"),
            percent = +prompt("Под какой процент?", "8");
    
            appData.monthIncome = save/1200*percent;
            alert("доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i=0; i<3; i++) {
            let optexp = prompt("Статья необязательных расходов?", "Entertaiment");
                if ((typeof(optexp)) === "string" && (typeof(optexp) != null)) {
                    appData.optionalExpenses[i+1] = optexp;
                } else {
                    alert("Заполните пожалуйста все поля!");
                    i--;
                }    
        }
    },
    chooseIncome: function() {
        let items = prompt("Что приносит доп. доход? (напишите через запятую)", "");
        if ((typeof(items)) === "string" && (typeof(items) != null) 
        && (isNaN(items) || items == "" || items == null)){
            appData.income = items.split(', ');
        } else {
            console.log("вы ввели что-то не то...");
        };
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(element, i) {
            console.log((i+1) + " : " + element);
        });
    }
};
console.log("Наша программа включает в себя данные: ");
for (let property in appData) {
    console.log(`${property}: ${appData[property]}`);
}
