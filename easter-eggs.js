/*=========================================================
    SECRET COMMAND TRACKER
=========================================================*/

const unlockedSecrets = new Set();

function unlockSecret(secretName) {

    if (unlockedSecrets.has(secretName)) return;

    unlockedSecrets.add(secretName);

    achievement(`Secret Unlocked: ${secretName}`);

}
/*=========================================================
    SAGE MODE
=========================================================*/

function activateSageMode() {

    unlockSecret("Sage Mode");

    document.body.classList.add("sage-mode");

    setTimeout(() => {

        document.body.classList.remove("sage-mode");

    }, 10000);

}
/*=========================================================
    CHIDORI
=========================================================*/

function chidoriFlash() {

    const flash = document.createElement("div");

    flash.className = "lightning-flash";

    document.body.appendChild(flash);

    setTimeout(() => {

        flash.remove();

    }, 500);

}
/*=========================================================
    RASENGAN
=========================================================*/

function rasenganEffect() {

    const orb = document.createElement("div");

    orb.className = "rasengan";

    document.body.appendChild(orb);

    setTimeout(() => {

        orb.remove();

    }, 2500);

}
/*=========================================================
    KONAMI CODE
=========================================================*/

const konami = [

"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"

];

let position = 0;

window.addEventListener("keydown", (event) => {

    if (event.key === konami[position]) {

        position++;

        if (position === konami.length) {

            unlockSecret("Hokage Rank");

            activateSageMode();

            position = 0;

        }

    } else {

        position = 0;

    }

});
