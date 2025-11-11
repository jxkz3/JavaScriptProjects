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
            <a href="${leads[i]}" target="_blank"> 
               ${leads[i]}  
            </a> 
      </li>`;
  }

  leadsEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads(myLeads);
});

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let currentUrl = tabs[0].url;
    myLeads.push(currentUrl);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads(myLeads);
  });
});
