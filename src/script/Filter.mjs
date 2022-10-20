// Filter Menu...........................

const productFilter = () => {
    var filterImg = document.querySelector("#filter");
    var filterOff = document.querySelector("#filterOff");
    var filter = document.querySelector("#filtercont");
    var filtermenu = document.querySelector("#items-wrapper");
    var menuitems = document.querySelectorAll(".item-cont");
    var dropdowns = document.querySelectorAll(".Dropdowns");
    var colormenu = document.querySelectorAll(".FilterColors");
    var colortxt = document.querySelectorAll(".ColorTxt");
    var categorymenu = document.querySelectorAll(".FilterCategories");
    var cattxt = document.querySelectorAll(".CatTxt");
    var flag = 0, target = -1, prev = -1;

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
            setTimeout(() => {
                filterOff.style.opacity = "1";
            }, 300);
        }

        else {
            filter.dataset.toggle = "off";
            filterOff.style.opacity = "0";
            setTimeout(() => {
                filterImg.style.opacity = "1";
            }, 300);
        }
    }

    filter.onclick = () => {

        if (filter.dataset.toggle === "off") {
            filter.dataset.toggle = "on";
            filtermenu.style.width = "27%";
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
                        this.style.border = "1px solid #37474f";
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
            filtermenu.style.width = "0";
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

            target = Array.from(this.parentElement.children).indexOf(this) - 1;
            // alert(`prev Flag: ${flag}, prev Index: ${prev}, current Index: ${target}`);

            if (prev === target) flag++;

            else if (prev !== target) {
                flag = 1;
                prev = target;
            }

            for (let i = 0; i < menuitems.length; i++) {

                if (i === target) {
                    var currentMenu = document.querySelector(`.dropdown.${menuitems[i].children[0].dataset.type}`);
                    menuitems[i].dataset.toggle = "on";
                    filtermenu.style.width = "100%";
                    menuitems[i].style.border = "1px solid #37474f";
                    menuitems[i].style.padding = "0.5rem";

                    setTimeout(() => {
                        filtermenu.children[1].style.opacity = "1";
                        filtermenu.children[1].style.width = "60%";
                    }, 250);
                    currentMenu.style.display = "grid";
                    setTimeout(() => {
                        currentMenu.style.opacity = "1";
                    }, 500);
                }

                else {
                    var otherMenu = document.querySelector(`.dropdown.${menuitems[i].children[0].dataset.type}`);
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
                    filtermenu.style.width = "27%";
                }, 100);
                setTimeout(() => {
                    filtermenu.children[1].style.opacity = "0";
                    filtermenu.children[1].style.width = "0";
                }, 250);
                flag = 0;
            }
            // alert(`current Flag: ${flag}`);
        }

    });

    var categoryImg = document.querySelectorAll(".categories img");


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