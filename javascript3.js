let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value || '') break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );
