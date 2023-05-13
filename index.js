// Расчёт варианта:

console.log('Вариант:' + 0x355918deca1ade10f34bb2c9d515aef5 % 155);

// Расчёт меню:

console.log('Меню:' + 0x355918deca1ade10f34bb2c9d515aef5 % 8);

// Данные о закрытии цен за весь апрель 2023:

let closingPrices = {
	'03.04.2023': 3.632,
	'04.04.2023': 3.644,
	'05.04.2023': 3.884,
	'06.04.2023': 3.792,
	'07.04.2023': 3.728,
	'10.04.2023': 3.764,
	'11.04.2023': 3.684,
	'12.04.2023': 3.744,
	'13.04.2023': 3.65,
	'14.04.2023': 3.72,
	'17.04.2023': 3.764,
	'18.04.2023': 3.914,
	'19.04.2023': 3.824,
	'20.04.2023': 3.82,
	'21.04.2023': 3.83,
	'24.04.2023': 3.798,
	'25.04.2023': 3.872,
	'26.04.2023': 3.872,
	'27.04.2023': 3.9,
	'28.04.2023': 3.816
};

function insertDataToTable() {
	let insertDate = document.getElementById('closingDateRow');
	let insertValue = document.getElementById('closingValueRow');
	for (let i = 0; i < Object.keys(closingPrices).length; i++) {
		let tddate = document.createElement('td');
		tddate.classList.add('date');
		tddate.innerHTML = Object.keys(closingPrices)[i];

		insertDate.appendChild(tddate);

		let tdvalue = document.createElement('td');
		tdvalue.classList.add('value');
		tdvalue.innerHTML = Object.values(closingPrices)[i];
		
		insertValue.appendChild(tdvalue);

		if (tdvalue.innerHTML == Math.min(...(Object.values(closingPrices)))) {
			tdvalue.style.backgroundColor = '#FFE9E9';
			tdvalue.style.color = '#CC2C2C';
			tdvalue.style.fontWeight = 'bold';
			tddate.style.backgroundColor = '#FFE9E9';
			tddate.style.color = '#CC2C2C';
			tddate.style.fontWeight = 'bold';
		}
		else if (tdvalue.innerHTML == Math.max(...(Object.values(closingPrices)))) {
			tdvalue.style.backgroundColor = '#D9FFEA';
			tdvalue.style.color = '#279847';
			tdvalue.style.fontWeight = 'bold';
			tddate.style.backgroundColor = '#D9FFEA';
			tddate.style.color = '#279847';
			tddate.style.fontWeight = 'bold';
		}
	}
}

function analysePrices() {
	let minPrice = Math.min(...(Object.values(closingPrices)));
	let maxPrice = Math.max(...(Object.values(closingPrices)));
	let valueRow = document.getElementsByClassName('value');

	let sumArray = 0;
	let sumXiE = 0;
	for (let i = 0; i < valueRow.length; i++) {
		sumArray += Object.values(closingPrices)[i];
	}

	let E = sumArray / valueRow.length;
	for (let i = 0; i < valueRow.length; i++) {
		sumXiE += (Object.values(closingPrices)[i] - E)**2;
	}

	let deviation = Math.sqrt((sumXiE) / Object.values(closingPrices).length);

	document.getElementById('cardMin').innerHTML = (`${minPrice}<span style="color: #9B9B9B; font-weight: 400; margin-left: 4px;"> ₽</span>`);
	document.getElementById('cardMax').innerHTML = (`${maxPrice}<span style="color: #9B9B9B; font-weight: 400; margin-left: 4px;"> ₽</span>`);
	document.getElementById('cardDeviation').innerHTML = Math.round(deviation * 100000) / 100000;
}

insertDataToTable();
analysePrices();

