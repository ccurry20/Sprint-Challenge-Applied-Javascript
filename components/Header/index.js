// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  const div = document.createElement("div");
  div.classList.add("header");

  const span = document.createElement("span");
  span.textContent = "MARCH 28, 2019";
  span.classList.add("date");
  div.appendChild(span);

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";
  div.appendChild(h1);

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = "98";
  div.appendChild(span2);

  return div;
}
const newHeader = Header();
let header1 = document.querySelector(".header-container");
header1.appendChild(newHeader);
