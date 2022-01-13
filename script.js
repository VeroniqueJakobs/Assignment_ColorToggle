let toggleNavStatus = false;
let elBody = document.body;
let getSidebarUL = document.querySelector(".nav-sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let getToggleNav = document.getElementsByClassName ("btn-toggle-nav")[0];
let getLiGrey = document.querySelector(".nav-sidebar .grey");
let getLiRed = document.querySelector(".nav-sidebar .red");
let getLiOrange = document.querySelector(".nav-sidebar .orange");
let getLiPurple = document.querySelector(".nav-sidebar .purple");
let getLiGreen = document.querySelector(".nav-sidebar .green");
let getItem = document.getElementsByTagName("p")[0];
let getText = getItem.textContent;

//Functie hamburgermenu
let toggleNav = function() {
     
    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
    
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true; 
    }

    else if (toggleNavStatus === true) {
        let arrayLength = getSidebarLinks.length;
        for( let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUL.style.visibility = "hidden";
        toggleNavStatus = false; 
        getItem.textContent = '' ;
    }
}

//Functie om hamburgermenu onzichtbaar te maken
let visibilitySidebarNavStatus = function(){ 
    getSidebarUL.style.visibility = "hidden"
    toggleNavStatus = false; 
}

//Als je klikt op het hamburgermenu, wordt de muiscursor een handje
getToggleNav.addEventListener("mousedown", function(){
    getToggleNav.style.cursor = "pointer";
})

//Als je klikt op het hamburgermenu, dan opent het
getToggleNav.addEventListener("click", toggleNav, false)

//Functies om zowel de tekst als de kleur van de achtergrond te wijzigen
getLiGrey.addEventListener("click", function(){
    elBody.style.background = "#F1F1F1";
    visibilitySidebarNavStatus();
    getItem.textContent = 'home'
})

getLiRed.addEventListener("click", function(){
    elBody.style.background = "red";
    visibilitySidebarNavStatus();
    getItem.textContent = 'red'
})

getLiOrange.addEventListener("click", function(){
    elBody.style.background = "orange";
    visibilitySidebarNavStatus();
    getItem.textContent = 'orange'
})

getLiPurple.addEventListener("click", function(){
    elBody.style.background = "purple"
    visibilitySidebarNavStatus();
    getItem.textContent = 'purple'
})

getLiGreen.addEventListener("click", function(){
    elBody.style.background = "green";
    visibilitySidebarNavStatus();   
    getItem.textContent = 'green'
})


