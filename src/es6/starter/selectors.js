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

document.getElementById('app').innerHTML = htmlTags;

}
