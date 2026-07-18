/*=========================================================
    TERMINAL ELEMENTS
=========================================================*/

const terminalInput = document.getElementById("terminal-input");

const terminalOutput = document.getElementById("terminal-output");

const summonModal = document.getElementById("summon-modal");

const introVideo = document.getElementById("intro-video");

const closeModal = document.getElementById("close-modal");
/*=========================================================
    COMMANDS
=========================================================*/

const commands = {

    help: `
Available Commands

help
about
skills
projects
contact
clear

Hidden Commands:
???????
`,

    about: `
Name:
Ejeh David Eniola

Role:
Cyber Security Student

Mission:
Learning. Adapting. Securing.
`,

    skills: `
Cyber Security
Networking
HTML
CSS
JavaScript
Linux
Python
`,

    projects: `
Mission Archive

CyberFolio
Network Scanner
Password Generator
`,

    contact: `
Phone:
07044373775

TikTok:
@emerald_uzumaki
`

};
/*=========================================================
    PRINT
=========================================================*/

function printOutput(text){

    terminalOutput.innerHTML += `

<pre>${text}</pre>

`;

    terminalOutput.scrollTop = terminalOutput.scrollHeight;

}
/*=========================================================
    COMMAND HANDLER
=========================================================*/

function executeCommand(command){

    command = command.toLowerCase().trim();

    if(command==="clear"){

        terminalOutput.innerHTML="";

        return;

    }

    if(commands[command]){

        printOutput(commands[command]);

        return;

    }

    executeHiddenCommand(command);

}
/*=========================================================
    HIDDEN COMMANDS
=========================================================*/
function executeHiddenCommand(command){

    switch(command){

        case "summon":

            summonPortfolio();

            break;

        case "sage":

        case "sage mode":

            activateSageMode();

            break;

        case "rasengan":

            rasenganEffect();

            achievement("Rasengan Master");

            break;

        case "chidori":

            chidoriFlash();

            achievement("Lightning Release");

            break;

        case "sharingan":

            achievement("Sharingan Activated");

            document.body.classList.toggle("sharingan-mode");

            break;

        case "bankai":

            achievement("Soul Reaper");

            document.body.classList.toggle("bankai-mode");

            break;

        default:

            printOutput("Unknown command.");


        case "bankai":

            achievement(

                "Soul Reaper"

            );

            document.body.classList.toggle(

                "bankai-mode"

            );

            break;

        default:

            printOutput(

                "Unknown command."

            );

    }

}
/*=========================================================
    INPUT
=========================================================*/

terminalInput.addEventListener(

    "keydown",

    event=>{

        if(event.key==="Enter"){

            printOutput(

                `> ${terminalInput.value}`

            );

            executeCommand(

                terminalInput.value

            );

            terminalInput.value="";

        }

    }

);
/*=========================================================
    SUMMON
=========================================================*/

function summonPortfolio(){

    printOutput(

        "Preparing Summoning Ritual..."

    );

    setTimeout(()=>{

        printOutput(

            "Drawing Seal..."

        );

    },1000);

    setTimeout(()=>{

        summonModal.classList.add(

            "show"

        );

        introVideo.play();

    },2500);

}
/*=========================================================
    CLOSE
=========================================================*/

closeModal.addEventListener(

    "click",

    ()=>{

        introVideo.pause();

        introVideo.currentTime=0;

        summonModal.classList.remove(

            "show"

        );

    }

);

introVideo.addEventListener(

    "ended",

    ()=>{

        summonModal.classList.remove(

            "show"

        );

        printOutput(

            "Summoning Complete."

        );

    }

);
/*=========================================================
    ACHIEVEMENTS
=========================================================*/

function achievement(text){

    const popup = document.getElementById(

        "achievement-popup"

    );

    const message = document.getElementById(

        "achievement-text"

    );

    message.textContent=text;

    popup.classList.add("show");

    setTimeout(()=>{

        popup.classList.remove("show");

    },3000);

}