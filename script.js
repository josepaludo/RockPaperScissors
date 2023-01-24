let GLOBAL_COUNT = 0;

function announceResult(result) {
    let resultDiv = document.getElementById("resultAnnouncer");
    resultDiv.innerHTML = result;
}

function checkResult(handShape, pcChoice) {
    let result = "Defeat!";
    if ((handShape === pcChoice+1) || (handShape === 0 && pcChoice === 2)) {
        result = "Victory!!!";
        increaseCount();
    }
    if (handShape === pcChoice) {
        result = "Draw.";
    }
    return result;
}

function increaseCount() {
    let countH2 = document.getElementById("count");
    GLOBAL_COUNT += 1;
    countH2.innerHTML = `Count: ${GLOBAL_COUNT}`;
}

function displayCorrespondingImage(handShape, divId)
{
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

    for (child of div.childNodes) {
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

