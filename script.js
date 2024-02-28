var parallaxe_background = document.querySelector("main>div.container>.parallaxe-background");
var parallaxe_self = document.querySelector("main>div.container>.parallaxe-self");
var code1 = document.querySelectorAll("main>div.container>.parallaxe-code.code1");
var code2 = document.querySelectorAll("main>div.container>.parallaxe-code.code2");
var code3 = document.querySelectorAll("main>div.container>.parallaxe-code.code3");

document.addEventListener("mousemove", (e) => {
    // Largeur et hauteur
    let largeurBack = parallaxe_background.clientWidth;
    let hauteurBack = parallaxe_background.clientHeight;
    let largeurBody = parallaxe_self.clientWidth;
    let hauteurBody = parallaxe_self.clientHeight;

    // Mouse pos
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Screen / background pos
    let screenX = ((mouseX - largeurBack/2) / largeurBack/2 * (30*2 - (-30)*2));
    let screenY = ((mouseY - hauteurBack/2) / hauteurBack/2 * (30*2 - (-30)*2));

    // Content pos
    let oneX = ((mouseX - largeurBack) / largeurBack * (10 - (-10)));
    let twoX = ((mouseX - largeurBack/18) / largeurBack/18 * (0.2 - (-0.2)));
    let threeX = ((mouseX - largeurBack) / largeurBack * (20 - (-20)));
    let fourX = ((mouseX - largeurBack) / largeurBack * (30 - (-30)));
    let fiveX = ((mouseX - largeurBack) / largeurBack * (40 - (-40)));
    let sixX = ((mouseX - largeurBack) / largeurBack * (50 - (-50)));

    parallaxe_background.style.transform = 'translate(' + -screenX/4 + 'px, ' + -screenY + 'px) scaleY(1.3) scaleX(1.5)';
    parallaxe_self.style.transform = 'translate(' + (twoX/6 + 25 + ((twoX/6 + 25) / 3)) + 'px, ' + -(screenY + hauteurBody/2.1) + 'px)';

    code1.forEach(element => {
        element.style.transform = 'translate(' + (oneX) + 'px, ' + -screenY + 'px)';
    });

    code2.forEach(element => {
        element.style.transform = 'translate(' + (threeX) + 'px, ' + -screenY + 'px)';
    });

    code3.forEach(element => {
        element.style.transform = 'translate(' + (fourX) + 'px, ' + -screenY + 'px)';
    });

    code4.forEach(element => {
        element.style.transform = 'translate(' + (fiveX) + 'px, ' + -screenY + 'px)';
    });

    code5.forEach(element => {
        element.style.transform = 'translate(' + (sixX) + 'px, ' + -screenY + 'px)';
    });
}); 