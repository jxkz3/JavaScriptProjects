//let leads = [];
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const leadsEl = document.getElementById("leads-el");
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el").value;

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl);
  console.log(myLeads);
  inputEl.value = "";
});

for (let i = 0; i < myLeads.length; i++) {
  // leadsEl.innerHTML += "<li> " + myLeads[i] + " </li>";

  const li = document.createElement("li");
  li.textContent = myLeads[i];
  leadsEl.append(li);
}
