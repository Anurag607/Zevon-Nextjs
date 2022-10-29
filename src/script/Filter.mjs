// Filter Menu...........................

const productFilter = () => {
    let filterImg = document.querySelector("#filter");
    let filterOff = document.querySelector("#filterOff");
    let filter = document.querySelector("#filtercont");
    let filtermenu = document.querySelector("#items-wrapper");
    let menuitems = document.querySelectorAll(".itemCont");
    let dropdowns = document.querySelectorAll(".Dropdowns");
    let colormenu = document.querySelectorAll(".FilterColors");
    let colortxt = document.querySelectorAll(".ColorTxt");
    let categorymenu = document.querySelectorAll(".FilterCategories");
    let cattxt = document.querySelectorAll(".CatTxt");
    let flag = 0, target = -1, prev = -1;
    let mediaQuery = window.matchMedia('(max-width: 1000px)')
    let mediaQuery1 = window.matchMedia('(max-width: 850px)')
    let mediaQuery2 = window.matchMedia('(max-width: 500px)')

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }

    for (let i = 0; i < colormenu.length; i++) {
        colormenu[i].style.background = `${colormenu[i].dataset.color}`;
    }

    for (let i = 0; i < colormenu.length; i++) {
        colortxt[i].textContent = `${colortxt[i].dataset.color}`;
    }

    for (let i = 0; i < categorymenu.length; i++) {
        cattxt[i].textContent = `${cattxt[i].dataset.apparel}`;
    }

    filter.onclick = () => {

if (filter.dataset.toggle === "off") {
            filter.dataset.toggle = "on";
            filterImg.style.opacity = "0";
            filterOff.style.display = "block";
            setTimeout(() => {
                filterImg.style.display = "none";
            }, 150);
            setTimeout(() => {
                filterOff.style.opacity = "1";
            }, 500);
            if (mediaQuery.matches) filtermenu.style.height = '45vh'
            else filtermenu.style.width = "27%";
            filtermenu.style.opacity = "1";
            
            filterImg.style.opacity = "0";
            setTimeout(() => {
                filterOff.style.opacity = "1";
            }, 300);

            setTimeout(() => {
                filtermenu.children[0].style.opacity = "1";
            }, 250);

            menuitems.forEach(menuitems => {

                menuitems.onmouseover = function () {
                    if (this.dataset.toggle === "off") {
                        this.style.border = "0.075rem solid #37474f";
                        this.style.padding = "0.5rem";
                    }
                }

                menuitems.onmouseout = function () {
                    if (this.dataset.toggle === "off") {
                        this.style.border = "none";
                        this.style.padding = "0";
                    }
                }

            });
        }        

        else {
            filter.dataset.toggle = "off";
            filterOff.style.opacity = "0";
            filterImg.style.display = "block";
            setTimeout(() => {
                filterOff.style.display = "none";
                filterImg.style.opacity = "1";
            }, 300);
            if (mediaQuery.matches) filtermenu.style.height = '0'
            else filtermenu.style.width = "0";
            filtermenu.style.opacity = "0";
            filtermenu.children[0].style.opacity = "0";

            filterOff.style.opacity = "0";
            setTimeout(() => {
                filterImg.style.opacity = "1";
            }, 300);

            menuitems.forEach(menuitems => {
                menuitems.style.border = "none";
                menuitems.style.padding = "0";
                menuitems.dataset.toggle = "off";
            });

            filtermenu.children[1].style.opacity = "0";
            filtermenu.children[1].style.width = "0";

            flag = 0;
            target = -1;
            prev = -1;
        }

    }

    menuitems.forEach(menuitem => {

        menuitem.onclick = function () {
            let currentMenu, otherMenu;

            target = Array.from(this.parentElement.children).indexOf(this) - 1;

            if (prev === target) flag++;

            else if (prev !== target) {
                flag = 1;
                prev = target;
            }

            for (let i = 0; i < menuitems.length; i++) {

                if (i === target) {
                    currentMenu = document.querySelector(`.Dropdowns.${menuitems[i].children[0].dataset.type}`);
                    menuitems[i].dataset.toggle = "on";
                    if(mediaQuery2.matches) filtermenu.style.height = "275vh";
                    else if(mediaQuery1.matches) filtermenu.style.height = "195vh";
                    else if(mediaQuery.matches) filtermenu.style.height = "195vh";
                    else filtermenu.style.width = "100%";
                    menuitems[i].style.border = "0.075rem solid #37474f";
                    menuitems[i].style.padding = "0.5rem";

                    setTimeout(() => {
                        filtermenu.children[1].style.opacity = "1";
                        if (mediaQuery2.matches) filtermenu.children[1].style.height = "162.5vh";
                        else if(mediaQuery1.matches) filtermenu.children[1].style.height = "117.5vh";
                        else if(mediaQuery.matches) filtermenu.children[1].style.height = "88.5vh";
                        else filtermenu.children[1].style.width = "60%";
                    }, 250);
                    currentMenu.style.display = "grid";
                    setTimeout(() => {
                        currentMenu.style.opacity = "1";
                    }, 500);
                }

                else {
                    otherMenu = document.querySelector(`.Dropdowns.${menuitems[i].children[0].dataset.type}`);
                    menuitems[i].dataset.toggle = "off";
                    menuitems[i].style.border = "none";
                    menuitems[i].style.padding = "0";
                    otherMenu.style.opacity = "0";
                    setTimeout(() => {
                        otherMenu.style.display = "none";
                    }, 100);
                }

            }

            if (flag === 2) {
                menuitems[target].dataset.toggle = "off";
                menuitems[target].style.border = "none";
                menuitems[target].style.padding = "0";
                currentMenu.style.opacity = "0";
                setTimeout(() => {
                    currentMenu.style.display = "none";
                    if (mediaQuery.matches) filtermenu.style.height = '45vh'
                    else filtermenu.style.width = "27%";
                }, 100);
                setTimeout(() => {
                    filtermenu.children[1].style.opacity = "0";
                    filtermenu.children[1].style.width = "0";
                }, 250);
                flag = 0;
            }
        }

    });

    let categoryImg = document.querySelectorAll(".categories img");


    categoryImg.forEach(img => {
        img.onclick = function () {
            if (this.dataset.toggle === "off") {
                this.dataset.toggle = "on";
                this.style.transform = "scale(1.2)";
            }
            else {
                this.dataset.toggle = "off";
                this.style.transform = "scale(1)";
            }
        }
    });

    colormenu.forEach(el => {
        el.onclick = function () {
            if (this.dataset.toggle === "off") {
                this.dataset.toggle = "on";
                this.style.transform = "scale(1.2)";
            }
            else {
                this.dataset.toggle = "off";
                this.style.transform = "scale(1)";
            }
        }
    });
}

export { productFilter };