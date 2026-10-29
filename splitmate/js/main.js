import { groups } from "./groupes.js";
import { membres } from "./membres.js";
console.log(groups);
console.log(groups.length);
let dashboardContainer = document.getElementsByClassName("hero-container");
console.log(dashboardContainer)
let borderGroupes = document.getElementsByClassName("BRDR1");
let borderMembres = document.getElementsByClassName("BRDR2");
let borderDepenses = document.getElementsByClassName("BRDR3");
let dashboardGroupCount = document.getElementById("dashboard-groupes-count");
let dashboardMembreCount = document.getElementById("dashboard-members-count")

console.log(dashboardMembreCount.textContent)
console.log(dashboardGroupCount.textContent);
dashboardGroupCount.textContent = groups.length;
dashboardMembreCount.textContent = membres.length;
