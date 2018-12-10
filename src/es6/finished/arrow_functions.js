export default () => {
  const addNumToOne = num => num + 1;
  console.log(addNumToOne(5));

  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

  const largeNumbers = numbers.filter(number => number > 70);
  console.log(largeNumbers);
}
