var b9 = document.getElementById('b9');
var b8 = document.getElementById('b8');
var b7 = document.getElementById('b7');
var b6 = document.getElementById('b6');
var b5 = document.getElementById('b5');
var b4 = document.getElementById('b4');
var b3 = document.getElementById('b3');
var b2 = document.getElementById('b2');
var b1 = document.getElementById('b1');

var result = document.getElementById('result');


var a1 = [];var a2 = [];var a3 = [];var a4 = [];var a5 = [];var a6 = [];var a7 = [];var a8 = [];var a9 = [];// для того чтобы не могла сработать второй раз область
var progress = []; // массив дает очередь хода

var o1 = []; var o2 = []; var o3 =[];var o4 = []; var o5 = []; var o6 =[];var o7 = []; var o8 = []; var o8 =[];
var o9 = [];

var x1 = []; var x2 = []; var x3 =[];var x4 = []; var x5 = []; var x6 =[];var x7 = []; var x8 = []; var x8 =[];
var x9 = [];


function win_o(){ // проверяет на выигрыш нолик
if (o1.length == 1 & o2.length == 1 & o3.length == 1 || o4.length == 1 & o5.length == 1 & o6.length == 1 || o7.length == 1 & o8.length == 1 & o9.length == 1 || o1.length == 1 & o4.length == 1 & o7.length == 1 || o2.length == 1 & o5.length == 1 & o8.length == 1 || o3.length == 1 & o6.length == 1 & o9.length == 1 || o1.length == 1 & o5.length == 1 & o9.length == 1 || o3.length == 1 & o5.length == 1 & o7.length == 1 ) {
result.innerHTML = 'Победил нолик';
result.style.fontSize = '20px';
end()
} else if (progress.length == 9) {
result.innerHTML = 'Ничья';
result.style.fontSize = '20px';
}
};

function win_x(){ // проверяет на выигрыш крестик
if (x1.length == 1 & x2.length == 1 & x3.length == 1 || x4.length == 1 & x5.length == 1 & x6.length == 1 || x7.length == 1 & x8.length == 1 & x9.length == 1 || x1.length == 1 & x4.length == 1 & x7.length == 1 || x2.length == 1 & x5.length == 1 & x8.length == 1 || x3.length == 1 & x6.length == 1 & x9.length == 1 || x1.length == 1 & x5.length == 1 & x9.length == 1 || x3.length == 1 & x5.length == 1 & x7.length == 1 ) {
result.innerHTML = 'Победил крестик';
result.style.fontSize = '20px';
end()
} else if (progress.length == 9) {
result.innerHTML = 'Ничья';
result.style.fontSize = '20px';
}
};


function end() { // функция не дает ходить при выигрыше. Если есть ходы.
a9.push('1');a8.push('1');a7.push('1');a6.push('1' );a5.push('1');a4.push('1');a3.push('1');a2.push(' 1');a1.push('1');
}

document.getElementById('reset').onclick = function() { // кнопка reset
location.reload();
}


// блоки
b9.onclick = function() {
if ( a9.length >= 1) { // не дает нажать повторно
return
}
else if ( progress.length % 2 == 0) {
a9.push('1'); // фиксирует нажатие
o9.push('2'); // добавляет значени нолика в массив.
progress.push('1'); // массив дает очередь хода
b9.innerHTML = "O"; // добавляет нолик
b9.style.color = '#3c5ed8'; // цвет нолика
b9.style.backgroundColor = 'transparent'; // убирает фон
win_o(); // проверка на выигрыш
} else if ( progress.length % 2 == 1) {
a9.push('1');
x9.push('2');
progress.push('1');
b9.style.backgroundColor = 'transparent';
b9.innerHTML = "X";
b9.style.color = '#ea493a';
win_x();
}
};

b8.onclick = function() {
if ( a8.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a8.push('1');
o8.push('2');
progress.push('1');
b8.style.backgroundColor = 'transparent';
b8.innerHTML = "O";
b8.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a8.push('1');
progress.push('1');
x8.push('2');
b8.style.backgroundColor = 'transparent';
b8.innerHTML = "X";
b8.style.color = '#ea493a'
win_x();
}

};

b7.onclick = function() {
if ( a7.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a7.push('1');
o7.push('2');
progress.push('1');
b7.style.backgroundColor = 'transparent';
b7.innerHTML = "O";
b7.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a7.push('1');
x7.push('2');
progress.push('1');
b7.style.backgroundColor = 'transparent';
b7.innerHTML = "X";
b7.style.color = '#ea493a'
win_x();
}

};

b6.onclick = function() {
if ( a6.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a6.push('1');
progress.push('1');
o6.push('2');
b6.style.backgroundColor = 'transparent';
b6.innerHTML = "O";
b6.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a6.push('1');
x6.push('2');
progress.push('1');
b6.style.backgroundColor = 'transparent';
b6.innerHTML = "X";
b6.style.color = '#ea493a'
win_x();
}

};

b5.onclick = function() {
if ( a5.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a5.push('1');
progress.push('1');
o5.push('2');
b5.style.backgroundColor = 'transparent';
b5.innerHTML = "O";
b5.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a5.push('1');
x5.push('2');
progress.push('1');
b5.style.backgroundColor = 'transparent';
b5.innerHTML = "X";
b5.style.color = '#ea493a'
win_x();
}
};

b4.onclick = function() {
if ( a4.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a4.push('1');
progress.push('1');
o4.push('2');
b4.style.backgroundColor = 'transparent';
b4.innerHTML = "O";
b4.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a4.push('1');
x4.push('2');
progress.push('1');
b4.style.backgroundColor = 'transparent';
b4.innerHTML = "X";
b4.style.color = '#ea493a'
win_x();
}
};

b3.onclick = function() {
if ( a3.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a3.push('1');
o3.push('2');
progress.push('1');
b3.style.backgroundColor = 'transparent';
b3.innerHTML = "O";
b3.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a3.push('1');
x3.push('2');
progress.push('1');
b3.style.backgroundColor = 'transparent';
b3.innerHTML = "X";
b3.style.color = '#ea493a'
win_x();
}
};

b2.onclick = function() {
if ( a2.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a2.push('1');
o2.push('2');
progress.push('1');
b2.style.backgroundColor = 'transparent';
b2.innerHTML = "O";
b2.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a2.push('1');
x2.push('2');
progress.push('1');
b2.style.backgroundColor = 'transparent';
b2.innerHTML = "X";
b2.style.color = '#ea493a'
win_x();
}
};

b1.onclick = function() {
if ( a1.length >= 1) {
return
} else if ( progress.length % 2 == 0) {
a1.push('1');
o1.push('2');
progress.push('1');
b1.style.backgroundColor = 'transparent';
b1.innerHTML = "O";
b1.style.color = '#3c5ed8'
win_o();
} else if ( progress.length % 2 == 1) {
a1.push('1');
x1.push('2');
progress.push('1');
b1.style.backgroundColor = 'transparent';
b1.innerHTML = "X";
b1.style.color = '#ea493a'
win_x();
}

};