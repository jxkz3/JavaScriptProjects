let myLeads = [];
const leadsEl = document.getElementById("leads-el");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> <a href="${myLeads}">  ${myLeads[i]}  </a> </li>`;
  }
  leadsEl.innerHTML = listItems;
}
