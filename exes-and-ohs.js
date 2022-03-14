function XO(str) {
  let countX = 0;
  let countY = 0;
  str
    .split('')
    .map(char => {
    if(char === 'x' || char === 'X') {
      countX += 1;
    } else if (char === 'o' || char === 'O') {
      countY += 1;
    }
  })
  return countX === countY ? true : false;
}