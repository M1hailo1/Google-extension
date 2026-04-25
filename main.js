const inputElement = document.querySelector("#input-el");
const inputButton = document.querySelector("#input-btn");
const outputElement = document.querySelector("#output-ul");
let myLeads = [];

inputButton.addEventListener("click", () => {
  if (inputElement.value != "") {
    myLeads.push(inputElement.value);
    outputElement.innerHTML += `
      <li>
        <a href='${inputElement.value}' 
          target='_blank'>${inputElement.value}
        </a>
      </li>`;
    inputElement.value = "";
  }
});

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + "</li>";
//   }

//   outputElement.innerHTML = listItems;
// }
