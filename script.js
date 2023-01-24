let WIN = 0;
let LOSS = 0;
let DRAW = 0;

function announceResult(result) {
    let resultDiv = document.getElementById("resultAnnouncer");
    resultDiv.innerHTML = result;
}

function updateCount() {
    let countH2 = document.getElementById("count");
    countH2.innerHTML = `Win/Loss/Draw: ${WIN}/${LOSS}/${DRAW}`;
}

function checkResult(handShape, pcChoice) {
    let result = "Defeat!";
    if ((handShape === pcChoice+1) || (handShape === 0 && pcChoice === 2)) {
        result = "Victory!!!";
        WIN += 1;
    } else if (handShape === pcChoice) {
        result = "Draw.";
        DRAW += 1;
    } else {
        LOSS += 1;
    }
    updateCount();
    return result;
}

function displayCorrespondingImage(handShape, divId) {
    let image = document.createElement("img");

    switch (handShape) {
        case 0:
            image.src = "assets/rock.png";
            break;
        case 1:
            image.src = "assets/paper.png";
            break;
        case 2:
            image.src = "assets/scissors.png";
            break;
    }
    let div = document.getElementById(divId);

    for (child of div.children) {
        child.remove()
    }
    div.appendChild(image);
}

function displayPCImage() {
    let pcChoice = Math.floor(Math.random()*3);
    displayCorrespondingImage(pcChoice, "pcImg");
    return pcChoice;
}

function chooseHandPosition(handShape) {
    displayCorrespondingImage(handShape, "playerImg");
    let pcChoice = displayPCImage();
    let result = checkResult(handShape, pcChoice);
    announceResult(result);
}

