export default () => {

  function doSomethingWithTemplate(strings, ...values) {
    console.log(strings)
    console.log(values)
    const valuesWrapped = values.map(value => `<strong>${value}</strong>`);
    return strings.reduce((sentence, string, i) =>
      `${sentence}${string}${valuesWrapped[i] || ''}`,
    '');
  }

  const first = 'Miłosz';
  const last = 'Frejnik';

  const newTemplate = doSomethingWithTemplate`<p>Hello, my name is ${first} and surname is ${last}</p>`;
  console.log(newTemplate);

  document.querySelector('#app').innerHTML = newTemplate;
}
