let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

/*let a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	a2 = prompt("Во сколько обойдется?", '');
let	a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;*/

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", '');
	let b = prompt("Во сколько обойдется?", '');

	if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("Done")
		appData.expenses[a] = b;
	} else {
		console.log("bad result");
		i--;
	}
};

appData.moneyPerDay = alert(appData.budget / 30);

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 4000) {
	console.log('Минимальный уровени достатка');
} else if (appData.moneyPerDay > 4000 && appData.moneyPerDay < 8000) {
	console.log('Cредний уровень достатка');
} else if (appData.moneyPerDay > 8000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Ошибка!');
}