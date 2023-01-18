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

btn.addEventListener('click', function() {
    if (appData.start == false) {
        appData.start = true;
        date = prompt("Введите дату в формате YYYY-MM-DD", "1985-06-22"),
        money = +prompt("Ваш бюджет на месяц?", "");

        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
        appData.butget = money;
        appData.timeData = date;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(date)).getFullYear();
        monthValue.value =new Date(Date.parse(date)).getMonth()+1;
        dayValue.value = new Date(Date.parse(date)).getDate();
    } else {
        appData.start = false;
    }
});
expensesBtn.addEventListener('click', function() {
    if (appData.start == true) {
        let sum = 0;

        for(let i=0; i<inputPole.length; i++) {
            let exp = inputPole[i].value,
                howMuch = inputPole[++i].value;
                if ((typeof(exp)) === "string" && (typeof(exp) != null) && (typeof(howMuch) != null) 
                    && exp!='' && howMuch!='' && exp.length < 50) {
                    console.log("done")    ;
                    appData.expenses[exp] = howMuch;
                    sum += +howMuch;
                } else {
                    alert("Заполните пожалуйста все поля!");
                    i--;
                }    
        }
        appData.sumEx = sum;
        expensesValue.textContent = sum;
    }
});

btnConfirm.addEventListener('click', function() {
    if (appData.start == true) {
        for(let i=0; i<fieldOption.length; i++) {
            let optexp = fieldOption[i].value;
                if ((typeof(optexp)) === "string" && (typeof(optexp) != null)) {
                    appData.optionalExpenses[i] = optexp;
                } else {
                    alert("Заполните пожалуйста все поля!");
                    i--;
                } 
                optionalExpensesValue.textContent += appData.optionalExpenses[i]+ ', ';
        }
    }
});

btnCount.addEventListener('click', function() {
    if (appData.start == true) {
        if (appData.butget !== undefined) {

            appData.moneyPerDay = ((appData.butget - appData.sumEx) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if (appData.moneyPerDay>100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = "Средний уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Error";
            }
        }
        else {
            dayBudgetValue.textContent = "Произошла ошибка";
            }
        }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    if ((typeof(items)) === "string" && (typeof(items) != null) 
    && (isNaN(items) || items == "" || items == null)){
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    } else {
        console.log("вы ввели что-то не то...");
    };
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    }
    else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/1200*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/1200*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    start: false,
    butget: money,
    sumEx: 0,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
