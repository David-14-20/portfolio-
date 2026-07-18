/*=========================================================
    DASHBOARD COUNTERS
=========================================================*/

function animateCounter(id,target){

    const element=document.getElementById(id);

    let current=0;

    const timer=setInterval(()=>{

        current++;

        element.textContent=current;

        if(current>=target){

            clearInterval(timer);

        }

    },40);

}

window.addEventListener("load",()=>{

    animateCounter("projects-count",6);

    animateCounter("skills-count",18);

    animateCounter("cert-count",3);

});