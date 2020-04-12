let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

function choseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

choseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
 
}

detectDayBudget();


function detectLevel(){
    if (appData.moneyPerDay < 4000) {
        console.log('Минимальный уровени достатка');
    } else if (appData.moneyPerDay > 4000 && appData.moneyPerDay < 8000) {
        console.log('Cредний уровень достатка');
    } else if (appData.moneyPerDay > 8000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка!');
    }
    
}

detectLevel();

function checkSavings(){
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накопления");
            percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего дипозита" + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    }

chooseOptExpenses();

