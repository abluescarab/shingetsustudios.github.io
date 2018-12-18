function ranArray(arrayName) {
    var index = Math.floor(Math.random() * (attributes[arrayName].length) + 1);
    var displayText = document.getElementById(arrayName + 'Display');

    if (arrayName == "species") {
        var myUrl = "https://www.google.com/search?tbm=isch&q=" + attributes[arrayName][index];
        displayText.href = myUrl;
    }

    displayText.innerHTML = attributes[arrayName][index];
}

function barGen(divName, backColor, progColor, var1, var2) {
    var innerBar = document.getElementById(divName + "Inner");
    var percent = Math.floor(Math.random() * 100);
    innerBar.style.width = percent + '%';
    innerBar.style.backgroundColor = progColor;

    document.getElementById(divName + "Outer").style.backgroundColor = backColor;

    if (divName == "endowment") {
        greeting = percent.toString() + "% " + var1;
    } else if (percent > 50) {
        greeting = percent.toString() + "% " + var1;
    } else if (percent < 50) {
        greeting = (100 - percent).toString() + "% " + var2;
    } else {
        greeting = percent.toString() + "% " + var1 + "/" + var2;
    }

    document.getElementById(divName + "Text").innerHTML = greeting;
}

function genColorBox(num) {
    var elem = document.createElement("div");
    elem.className = "colorBox";
    elem.id = "colorBox" + num;
    elem.setAttribute("onclick", "randomColor(" + num + ")");

    document.getElementById("colorBoxContainer").appendChild(elem);
}

function randomColor(num) {
    var randColor = Math.floor(Math.random() * (256 * 256 * 256 - 1));
    var randColorHex = "#" + randColor.toString(16);

    document.getElementById("colorBox" + num.toString()).style.backgroundColor = randColorHex;
}

function colorReset() {
    $('.colorBox').remove();
    $('.colorButton').remove();
    $('.colorList').remove();
    myNumber = document.getElementById("colorNum").value;
    for (i = 1; i - 1 < myNumber; i++) {
        genColorBox(i);
        randomColor(i);
    }
}

function newGender() {
    barGen("gender", "#ff66cc", "#33ccff", "Masculine", "Feminine");
}

function newHeight() {
    barGen("height", "#00ca42", "#5e4bfe", "Short", "Tall");
}

function newWeight() {
    barGen("weight", "#7d4e3e", "#e4e1f7", "Skinny", "Fat");
}

function newStrength() {
    barGen("strength", "#edea78", "#b75215", "Strong", "Weak");
}

function newEndowment() {
    barGen("endowment", "#ffffff", "#a4d314", "Endowed", "Not Endowed");
}

function newHairLength() {
    barGen("hair", "#fabc7e", "#4e3214", "Long", "Short");
}

function newBody() {
    newGender();
    newHeight();
    newWeight();
    newStrength();
}

function generate() {
    genColorBox(1);
    randomColor(1);
    colorReset();
    ranArray("job");
    ranArray("species");
    newGender();
    newHeight();
    newWeight();
    newStrength();
    newEndowment();
    newHairLength();
    ranArray("hair");
}
