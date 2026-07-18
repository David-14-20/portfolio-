/*=========================================================
    SHINOBI SYMBOL RAIN
=========================================================*/

const canvas = document.createElement("canvas");

canvas.id = "clan-rain";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;
/*=========================================================
    SYMBOLS
=========================================================*/

const symbols = [

"忍","火","風","水","雷",

"土","影","刀","心","幻",

"術","愛","力","光","闇",

"◈","✦","✧","✪","⬢",

"△","◇","⬡","✥","✺"

];
/*=========================================================
    SETTINGS
=========================================================*/

const fontSize = 18;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i = 0; i < columns; i++){

    drops[i] = Math.random() * canvas.height;

}
/*=========================================================
    DRAW
=========================================================*/

function drawRain(){

    ctx.fillStyle = "rgba(5,8,22,0.08)";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00CFFF";

    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = symbols[
            Math.floor(Math.random()*symbols.length)
        ];

        ctx.fillText(

            text,

            i*fontSize,

            drops[i]*fontSize

        );

        if(

            drops[i]*fontSize >

            canvas.height &&

            Math.random() > .975

        ){

            drops[i]=0;

        }

        drops[i]++;

    }

}
/*=========================================================
    LOOP
=========================================================*/

setInterval(drawRain,40);
/*=========================================================
    RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});