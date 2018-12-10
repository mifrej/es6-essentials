const age = 42;

const name = 'Milosz';

function mainFunction() {
  console.log('Main module functionality!');
}

const team = {
  name: 'ACM',
  members: [{ name: 'Milosz' }, { name: 'Bastian' }]
};

export { age, name, team };
export default mainFunction;
