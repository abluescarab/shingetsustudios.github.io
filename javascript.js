function generateFromArray(arrayName) {
    var index = Math.floor(Math.random() * (attributes[arrayName].length) + 1);
    var displayText = document.getElementById(arrayName + '-display');

    if (arrayName == "species") {
        var myUrl = "https://www.google.com/search?tbm=isch&q=" + attributes[arrayName][index];
        displayText.href = myUrl;
    }

    displayText.innerHTML = attributes[arrayName][index];
}

function calculateProgressBar(divName, backColor, progColor, moreThanHalf, lessThanHalf) {
    var innerBar = document.getElementById(divName + "-inner");
    var percent = Math.floor(Math.random() * 100);
    innerBar.style.width = percent + '%';
    innerBar.style.backgroundColor = progColor;

    document.getElementById(divName + "-outer").style.backgroundColor = backColor;

    if (divName == "endowment") {
        greeting = percent.toString() + "% " + moreThanHalf;
    } else if (percent > 50) {
        greeting = percent.toString() + "% " + moreThanHalf;
    } else if (percent < 50) {
        greeting = (100 - percent).toString() + "% " + lessThanHalf;
    } else {
        greeting = percent.toString() + "% " + moreThanHalf + "/" + lessThanHalf;
    }

    document.getElementById(divName + "-text").innerHTML = greeting;
}

function createColorBox(num) {
    var elem = document.createElement("div");
    elem.className = "color-box";
    elem.id = "color-box-" + num;
    elem.setAttribute("onclick", "randomColor(" + num + ")");

    document.getElementById("color-box-container").appendChild(elem);
}

function randomColor(num) {
    var randColor = Math.floor(Math.random() * (256 * 256 * 256 - 1));
    var randColorHex = "#" + randColor.toString(16);

    document.getElementById("color-box-" + num.toString()).style.backgroundColor = randColorHex;
}

function resetColors() {
    var colorBoxes = document.getElementsByClassName("color-box");

    while(colorBoxes[0]) {
        colorBoxes[0].parentNode.removeChild(colorBoxes[0]);
    }

    var count = document.getElementById("color-count").value;

    for (i = 1; i - 1 < count; i++) {
        createColorBox(i);
        randomColor(i);
    }
}

function newGender() {
    calculateProgressBar("gender", "#ff66cc", "#33ccff", "Masculine", "Feminine");
}

function newHeight() {
    calculateProgressBar("height", "#00ca42", "#5e4bfe", "Short", "Tall");
}

function newWeight() {
    calculateProgressBar("weight", "#7d4e3e", "#e4e1f7", "Skinny", "Fat");
}

function newStrength() {
    calculateProgressBar("strength", "#edea78", "#b75215", "Strong", "Weak");
}

function newEndowment() {
    calculateProgressBar("endowment", "#ffffff", "#a4d314", "Endowed", "Not Endowed");
}

function newHairLength() {
    calculateProgressBar("hair", "#fabc7e", "#4e3214", "Long", "Short");
}

function newBody() {
    newGender();
    newHeight();
    newWeight();
    newStrength();
}

function generate() {
    createColorBox(1);
    randomColor(1);
    resetColors();
    generateFromArray("job");
    generateFromArray("species");
    newGender();
    newHeight();
    newWeight();
    newStrength();
    newEndowment();
    newHairLength();
    generateFromArray("hair");
}
