if(!localStorage.getItem("clicks"))localStorage.setItem("clicks",'0');

document.addEventListener("DOMContentLoaded"
    , function () {

        const btn = document.getElementsByClassName("section__content__button");
        const alt = document.getElementsByClassName("alert");
        const colorOverlay = document.getElementsByClassName("color-overlay");
        const altCopy = document.getElementsByClassName("alert__content__copy");
        const altClicks = document.getElementsByClassName("alert__content__copy__bold__clicks");
        const icon = document.getElementsByClassName("alert__x_icon");

        btn[0].addEventListener("click", clickCounter);

        function clickCounter() {

            const btnReset = document.getElementById('btnReset');
            let clicks = Number(localStorage.getItem("clicks"));
            clicks += 1;
            altClicks[0].innerHTML = clicks;
            localStorage.setItem("clicks",String(clicks));

            if(clicks>5 && !btnReset) {
                const b = document.createElement("button");
                b.innerHTML = "ZRESETUJ";
                b.id = 'btnReset';
                b.style.cssText = 'color: red';
                b.addEventListener("click", () => {
                    localStorage.setItem("clicks", '0');
                    altClicks[0].innerHTML = '0';
                    altCopy[0].removeChild(altCopy[0].lastChild);
                });
                altCopy[0].appendChild(b);
            }

            if(colorOverlay){
                colorOverlay[0].addEventListener("click", () => {
                    console.log('colorOverlay.addEventListener');
                    clickVisibility();
                });
            }

            alt[0].classList.remove('alert--visibility');
            colorOverlay[0].classList.remove('alert--visibility');

        }

        icon[0].addEventListener("click", clickVisibility);

        function clickVisibility() {
            alt[0].classList.add('alert--visibility');
            colorOverlay[0].classList.add('alert--visibility');
        }

    });