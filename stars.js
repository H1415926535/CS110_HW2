

const print = function(sign, number) {
  if (number === 0) return '';

  return sign + print(sign, number-1);
};


const Stars = function(number)
{
  if(number === 0)
    return '';

  return Stars(number - 1) + "\n" + print(" ", row - number) + print("*", 2 * number - 1);
};

const row = 20;
console.log(Stars(row));
