let insertNumber = null;
let Screen = document.querySelector('div#result');

let AC = document.querySelector('button#AC').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = null;
	} else {
		insertNumber = null;
		Screen.innerHTML = '';
	}
});

let spot = document.querySelector('button#spot').addEventListener('click', function() {
	if(insertNumber != null && insertNumber.length < 13) {
		insertNumber += '.';
		Screen.innerHTML += '.';
	}
});

let plus = document.querySelector('button#plus').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '+') {
		insertNumber += '+';
		Screen.innerHTML += '+';
	}
});

let subtract = document.querySelector('button#subtract').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '-') {
		insertNumber += '-';
		Screen.innerHTML += '-';
	}
});

let split = document.querySelector('button#split').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '/') {
		insertNumber += '/';
		Screen.innerHTML += '÷';
	}
});

let multiply = document.querySelector('button#multiply').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '*') {
		insertNumber += '*';
		Screen.innerHTML += '×';
	}
});

let left_parenthesis = document.querySelector('button#left-parenthesis').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '(') {
		insertNumber += '(';
		Screen.innerHTML += '(';
	}
});

let right_parenthesis = document.querySelector('button#right-parenthesis').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != ')') {
		insertNumber += ')';
		Screen.innerHTML += ')';
	}
});

let percentage = document.querySelector('button#percentage').addEventListener('click', function() {
	if(insertNumber[insertNumber.length - 1] != '%') {
		insertNumber += '/100*';
		Screen.innerHTML += '%';
	}
});

let equal = document.querySelector('button#equal').addEventListener('click', function() {
	Screen.innerHTML = eval(insertNumber);
	insertNumber = eval(insertNumber);
});

let one = document.querySelector('button#one').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '1';
		Screen.innerHTML += '1';
	} else if(insertNumber.length < 13) {
		insertNumber += '1';
		Screen.innerHTML += '1';
	}
});

let two = document.querySelector('button#two').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '2';
		Screen.innerHTML += '2';
	} else if(insertNumber.length < 13) {
		insertNumber += '2';
		Screen.innerHTML += '2';
	}
});

let three = document.querySelector('button#three').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '3';
		Screen.innerHTML += '3';
	} else if(insertNumber.length < 13) {
		insertNumber += '3';
		Screen.innerHTML += '3';
	}
});

let four = document.querySelector('button#four').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '4';
		Screen.innerHTML += '4';
	} else if(insertNumber.length < 13) {
		insertNumber += '4';
		Screen.innerHTML += '4';
	}
});


let five = document.querySelector('button#five').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '5';
		Screen.innerHTML += '5';
	} else if(insertNumber.length < 13) {
		insertNumber += '5';
		Screen.innerHTML += '5';
	}
});


let six = document.querySelector('button#six').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '6';
		Screen.innerHTML += '6';
	} else if(insertNumber.length < 13) {
		insertNumber += '6';
		Screen.innerHTML += '6';
	}
});


let seven = document.querySelector('button#seven').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '7';
		Screen.innerHTML += '7';
	} else if(insertNumber.length < 13) {
		insertNumber += '7';
		Screen.innerHTML += '7';
	}
});


let eight = document.querySelector('button#eight').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '8';
		Screen.innerHTML += '8';
	} else if(insertNumber.length < 13) {
		insertNumber += '8';
		Screen.innerHTML += '8';
	}
});


let nine = document.querySelector('button#nine').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '9';
		Screen.innerHTML += '9';
	} else if(insertNumber.length < 13) {
		insertNumber += '9';
		Screen.innerHTML += '9';
	}
});

let zero = document.querySelector('button#zero').addEventListener('click', function() {
	if(insertNumber == null) {
		insertNumber = '0.';
		Screen.innerHTML += '0.';
	} else if(insertNumber.length < 13) {
		insertNumber += '0';
		Screen.innerHTML += '0';
	}
});
