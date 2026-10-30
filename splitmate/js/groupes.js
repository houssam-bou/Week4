const groupesForm = document.getElementById("groupes-form");

const groupeName = document.getElementById("groupe-name");
const groupeDescription = document.getElementById("groupe-description");
const deviseSelect = document.getElementById("devise-select");
const dateGroupes = document.getElementById("date-groupes");


groupesForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = groupeName.value.trim();
    const description = groupeDescription.value.trim();
    const devise = deviseSelect.value;
    const date = dateGroupes.value;


    const groupe = {
        nom: nom,
        description: description,
        devise: devise,
        date: date
    };

    console.log(groupe);
}); 
