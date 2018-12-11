export default function() {
  const htmlTags = `
  <ul id="list-id">
    <li data-time="5:17">Some Video</li>
    <li data-time="8:22" class="special-element">Some Video</li>
    <li data-time="3:34">Any Video</li>
    <li data-time="5:23">Some Video</li>
    <li data-time="7:12">Some Video</li>
    <li data-time="7:24">Any Video</li>
    <li data-time="6:46">Some Video</li>
    <li data-time="4:45">Some Video</li>
    <li data-time="4:40">Some Video</li>
    <li data-time="7:58" class="special-element">Any Video</li>
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

// appending the list to the document
const mainDocumentElement = document.getElementById('app');
mainDocumentElement.innerHTML = htmlTags;

// select all li elements with [data-time] attribute

// select all li with classname `special-element`

// create new ul list

// create new li element

// append new created li element to new created ul list

// append the new created list to the DOM

}
