

function displayInsertNoun() {
    let ForeignCountry = document.getElementById('ForeignCountry').value;
    let Adjective = document.getElementById('Adjective').value;
    let Animal = document.getElementById('Animal').value;
    let Verb = document.getElementById('Verb').value;
    let TypeOfLiquid = document.getElementById('TypeOfLiquid').value;
    let Place = document.getElementById('Place').value;

    let userMADLIB = document.getElementById('madLib')

    userMADLIB.textContent = 'If you are traveling in ' + ForeignCountry + ' and find yourself having to cross a piranha-filled river, here’s how to do it safely. Piranhas are more ' + Adjective + ' during the day, so cross the river at night. Avoid areas with netted ' + Animal + ' traps –piranhas may be waiting there looking to ' + Verb + ' them! Piranhas are attracted to fresh ' + TypeOfLiquid + ' and will migrate to it as often as possible.Whatever you do, if you have an open wound, try to find another way to get back to the ' + Place + '.';
}

function displayTempFarenheit() {
    let celsius = document.getElementById('celsius').value;

    let tempInFarenheit = document.getElementById('farenheit');

    tempInFarenheit.textContent = celsius * 9 / 5 + 32;
}

let loopMultipleSeven = document.getElementById('loopSeven');

for (let i = 1; i <= 30; i++) {
    loopMultipleSeven.innerHTML += i*7 + "<br/>";
}

function displayAreaOfCircle() {
    
    let radiusOfCircle = document.getElementById('radiusOfCircle').value;

    let areaOfCircle = document.getElementById('areaOfCircle');

    areaOfCircle.textContent = 3.14 * radiusOfCircle** 2;
}

function displayAreaOfSquare() {

    let dimOfSquare = document.getElementById('dimOfSquare').value;
    let areaOfSquare = document.getElementById('areaOfSquare').value;

    areaOfSquare.textContent = dimOfSquare * dimOfSquare;
}

function AreaOfTriangle() {

    let heightOfTri = document.getElementById('heightOfTri').value;
    let baseOfTri = document.getElementById('baseOfTri').value;

    let areaOfTriangle = document.getElementById('areaOfTriangle');

    areaOfTriangle.textContent = (heightOfTri * baseOfTri) / 2;
}

function displayAreaOfRing() {

    let innerRadius = document.getElementById('innerRadius').value;
    let outerRadius = document.getElementById('outerRadius').value;

    let areaOfRing = document.getElementById('areaOfRing');

    areaOfRing.textContent = 3.14 * ((outerRadius ** 2) - (innerRadius ** 2));
}

function displayChange() {

    let dollarAmount = document.getElementById('dollarAmount').value;

    let dollarInChange = document.getElementById('dollarInChange');

    dollarInChange.textContent = dollarAmount % .25;
}