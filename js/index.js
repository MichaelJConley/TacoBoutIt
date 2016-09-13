
var food = [];

function displayPantry() {
    var text = "", i;
    for (i = 0; i < food.length; i++) {
        text += food[i];
        if (i + 1 !== food.length) {
            text += ", ";
        }
    }
    document.getElementById("list").innerHTML = text;
}

function addToList() {
    var newFood = document.getElementById("input").value;
    if (newFood !== "") {
        food.push(newFood);
        document.getElementById("input").value = "";
        displayPantry();
    }
}

function clearPantry() {
    food = [];
    displayPantry();
}

function findRecipe() {
    alert("There are no recipes that match your ingredients!");
}