function calculate() {
    let serving = document.getElementById("serving").value;

    let preparationTime = serving * 10;
    let cookingTime = serving * 20;

    let servingList = document.getElementById("serving-list");
    let preparation = servingList.getElementsByTagName("li")[1];
    preparation.textContent = "Preparation time: " + preparationTime + " mins";

    let cooking = servingList.getElementsByTagName("li")[2];
    cooking.textContent = "Cooking time: " + cookingTime + " mins";
}