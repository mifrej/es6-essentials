export default function () {
  function addNumToOne(num) {
    return num + 1;
  }

  console.log(addNumToOne(5));

  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

  const largeNumbers = numbers.filter(function(number) {
    if (number > 70) {
      return number
    }
  });

  console.log(largeNumbers);
}
