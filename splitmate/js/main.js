import { groups } from "./groupes.js";
import { membres } from "./membres.js";

displayDashboard();




console.log(groups, membres);
console.log(groups.length);
let dashboardContainer = document.getElementsByClassName("hero-container");
console.log(dashboardContainer);
let dashboardGroupCount = document.getElementById("dashboard-groupes-count");
let dashboardMembreCount = document.getElementById("dashboard-members-count");

function displayDashboard() {
    console.log(dashboardMembreCount.textContent)
    console.log(dashboardGroupCount.textContent);
    dashboardGroupCount.textContent = groups.length;
    dashboardMembreCount.textContent = membres.length;
}


