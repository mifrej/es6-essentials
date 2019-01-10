export default function() {
  const htmlTags = `
  <ul id="list-id">
    <li data-time="5:17">Some Video</li>
    <li data-time="8:22" class="special-element">This list element is special</li>
    <li data-time="3:34">Any Video</li>
    <li data-time="5:23">Some Video</li>
    <li data-time="7:12">Some Video</li>
    <li data-time="7:24">Any Video</li>
    <li data-time="6:46">Some Video</li>
    <li data-time="4:45">Some Video</li>
    <li data-time="4:40">Some Video</li>
    <li data-time="7:58" class="special-element">This list element is special</li>
    <li data-time="11:51">Some Video</li>
    <li data-time="9:13">Some Video</li>
    <li data-time="5:50">Some Video</li>
    <li data-time="5:52">Any Video</li>
    <li data-time="5:49">Some Video</li>
    <li data-time="8:57">Some Video</li>
    <li data-time="11:29">Some Video</li>
    <li data-time="3:07">Some Video</li>
    <li data-time="5:59">Any Video</li>
    <li data-time="3:31">Some Video</li>
  </ul>
  `;
  console.log(htmlTags);

  // appending the list to the document
  const mainDocumentElement = document.getElementById('app');
  mainDocumentElement.innerHTML = htmlTags;

  // select all li elements with [data-time] attribute
  const liElementsWidthDateAttribute = document.querySelectorAll('[data-time]');
  console.log('Node list of all elements with attribute [data-time]');
  console.log(liElementsWidthDateAttribute);

  // select all li with classname `special-element`
  const liElementsWithSpecialClass = document.querySelectorAll('li.special-element');
  console.log('Node list of all elements with classname `special-element`');
  console.log(liElementsWithSpecialClass);

  // create new ul list
  const newUlList = document.createElement('ul');
  newUlList.setAttribute('id', 'new-list-id');
  console.log('New created ul list')
  console.log(newUlList);


  // create new li element
  const newLiElem = document.createElement('li');
  newLiElem.innerText = 'Some new created node element';

  // append new created li element to new created ul list
  newUlList.appendChild(newLiElem);

  // append nodelist of elements to the new createed ul list
  // liElementsWithSpecialClass.forEach(el => { newUlList.append(el.cloneNode(true)) });

  // append the new created list to the DOM
  mainDocumentElement.append(newUlList);
}
