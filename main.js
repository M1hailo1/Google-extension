const inputElement = document.querySelector("#input-el");
const inputButton = document.querySelector("#input-btn");
const outputElement = document.querySelector("#output-ul");
const deleteButton = document.querySelector("#delete-btn");
const saveButton = document.querySelector("#save-btn");

const localStorageLeads = JSON.parse(localStorage.getItem("leads"));

let myLeads = [];

if (localStorageLeads) {
  myLeads = localStorageLeads;
  render(myLeads);
}

saveButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

inputButton.addEventListener("click", () => {
  if (inputElement.value != "") {
    myLeads.push(inputElement.value);
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads);
    inputElement.value = "";
  }
});

function render(array) {
  let listItems = "";
  for (let i = 0; i < array.length; i++) {
    listItems += `
      <li>
        <a href='${array[i]}' 
          target='_blank'>${array[i]}
        </a>
      </li>`;
  }

  outputElement.innerHTML = listItems;
}

deleteButton.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
