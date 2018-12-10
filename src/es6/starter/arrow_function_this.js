export default () => {
  const html = `
    <h2><a href="#">Some Link</a></h2>
  `
  document.querySelector('#app').innerHTML= html;

  const h2Element = document.querySelector('h2');
  h2Element.addEventListener('click', () => {
    console.log(this)
    this.classList.toggle('active');
  });
}
