let points = 0;
let upgrades = 0;
let upgradeCost = 10;
let clickValue = 1;

function clickButton() {
    points += clickValue;
    updateUI();
    checkWin();
}

function buyUpgrade() {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        upgrades++;
        clickValue++;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        updateUI();
    } else {
        alert("Te falta PODER");
    }
}

function updateUI() {
    document.getElementById("points").textContent = points;
    document.getElementById("upgrades").textContent = upgrades;
    document.getElementById("upgrade-cost").textContent = upgradeCost;
}

function checkWin() {
    if (points >= 500) {
        alert("Parabéns você agora é um FADINHA!!!");
        resetGame();
    }
}

function resetGame() {
    points = 0;
    upgrades = 0;
    upgradeCost = 10;
    clickValue = 1;
    updateUI();
}