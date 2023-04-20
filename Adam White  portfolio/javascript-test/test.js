var computers = ['Apple', 'IBM', 'Commodore', 'TRS-80', 'Amiga'];
var family = new Array('Adam', 'Zady', 'Abby', 'Emma', 'Scooby', 'Theo');

document.getElementById('output').innerHTML = computers[2];
document.getElementById('output').innerHTML += '<br/>' + family[0];

computers[2] = 'Obamaism';
document.getElementById('output').innerHTML = '<br/>' + family;
var out = ' ';
for (var x = 0; x < computers.length; x++) {
  document.getElementById('output').innerHTML += '<br/>' + family;
}
