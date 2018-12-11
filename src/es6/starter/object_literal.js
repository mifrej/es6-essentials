export default () => {
  const name = 'Milosz';
  const surname = 'Frejnik';
  const married = 'Married';
  // dynamic key name
  const activity = 'cycle';

  const person = {
    name: name,
    surname: surname,
    maritalStatus: married,
    kids: ['Jurek', 'Eliza', 'Alicja'],
    run: function() {
      console.log('🏃🏻‍♂️');
    },
    // make this key name dynamic from the const activity
    cycle: function() {
      console.log('🚴‍♂️');
    }
  }

  console.log(person);
  person.cycle();
  person.run();
}
