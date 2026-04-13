const inputElement = document.querySelector("#input-el");
const inputButton = document.querySelector("#input-btn");
const outputElement = document.querySelector("#output-ul");
let myLeads = [1, 2, 3];

inputButton.addEventListener("click", () => {
  if (inputElement.value != "") {
    myLeads.push(inputElement.value);
    inputElement.value = "";
    renderLeads();
  }
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }

  outputElement.innerHTML = listItems;
}
