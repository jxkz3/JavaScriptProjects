let myLeads = [];
const leadsEl = document.getElementById("leads-el");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const clearBtn = document.getElementById("clear-btn");

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsLocalStorage) {
  myLeads = leadsLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>    
            <a href="${myLeads}" target="_blank"> 
               ${myLeads[i]}  
            </a> 
      </li>`;
  }

  leadsEl.innerHTML = listItems;
}

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
