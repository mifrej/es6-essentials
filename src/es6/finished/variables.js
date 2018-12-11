export default function() {
  const me = { name: 'Milosz' };
  console.log(me);
  me.surname = 'Frejnik';
  console.log(me, 'updated');

  for (let index = 0; index < 10; index++) {
    setTimeout(function() {
      console.log('=====================');
      console.log('The index is: ', index);
    }, 500);
  }
}
