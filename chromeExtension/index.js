let myLeads = [];
const leadsEl = document.getElementById("leads-el");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const clearBtn = document.getElementById("clear-btn");
const tabBtn = document.getElementById("tab-btn");

let leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsLocalStorage) {
  myLeads = leadsLocalStorage;
  renderLeads(myLeads);
}

function renderLeads(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>    
            <a href="${leads}" target="_blank"> 
               ${leads[i]}  
            </a> 
      </li>`;
  }

  leadsEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads(myLeads);
});

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

tabBtn.addEventListener("click", function () {
  tab = "hai";
  myLeads.push(tab);
  renderLeads(myLeads);
  ``;
});
