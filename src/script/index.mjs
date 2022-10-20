document.addEventListener('DOMContentLoaded', () => {

    // Pre-Loader...........................
    var preLoader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preLoader.style.opacity = '0';
        setTimeout(() => {
            preLoader.style.display = "none";
        }, 100);
    });

    // Searchbox...........................
    var search = document.querySelector(".searchbox");
    var searchinput = search.children[0];
    var searchico = document.querySelector(".searchbox img");
    search.onclick = () => {
        if (searchico.dataset.toggle == "off") {
            searchinput.style.width = "12.5rem";
            searchico.dataset.toggle = "on";
            search.style.transform = "translateX(-5%)";
        }
        else {
            searchinput.style.width = "0";
            searchico.dataset.toggle = "off";
            search.style.transform = "translateX(-27.5%)";
        }
    }

    // Title Background...........................
    var title = document.querySelector('#title');
    var imgs = ['./images/mt1rs.jpg', './images/mt2rs.jpg', './images/mt3rs.jpg', './images/mt4rs.jpg', './images/mt5rs.jpg'];
    var bgindex = 0;
    function titlebg() {
        title.style.backgroundImage = 'url(' + imgs[bgindex] + ')';
        bgindex++;
        if (bgindex > imgs.length - 1) bgindex = 0;
        setTimeout(titlebg, 5000);
    }
    titlebg();

    // Paginator...........................
    var next = document.querySelector("#next");
    var prev = document.querySelector("#prev");
    var card = document.querySelectorAll(".cardcont");
    var carddivs = card.length;
    var cardindex = 0;
    function paginator() {
        next.onclick = () => {
            card.forEach(card => {
                card.style.display = 'none';
            })
            cardindex++;
            if (cardindex > carddivs - 1) cardindex = 0;
            card[cardindex].style.display = 'block';
        }
        prev.onclick = () => {
            card.forEach(card => {
                card.style.display = 'none';
            })
            cardindex--;
            if (cardindex < 0) cardindex = carddivs - 1;
            card[cardindex].style.display = 'block';
        }
    }
    paginator();

    // Filter Menu...........................
    var filter = document.querySelector(".filter");
    var filtermenu = document.querySelector(".items-wrapper");
    var menuitems = document.querySelectorAll(".item-cont");
    var dropdowns = document.querySelectorAll(".dropdown");
    var colormenu = document.querySelectorAll(".colors");
    var colortxt = document.querySelectorAll(".color-txt");
    var categorymenu = document.querySelectorAll(".categories");
    var cattxt = document.querySelectorAll(".cat-txt");
    var flag = 0, target = -1, prev = -1;

    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
    }

    for (i = 0; i < colormenu.length; i++) {
        colormenu[i].style.background = `${colormenu[i].dataset.color}`;
    }

    for (i = 0; i < colormenu.length; i++) {
        colortxt[i].textContent = `${colortxt[i].dataset.color}`;
    }

    for (i = 0; i < categorymenu.length; i++) {
        cattxt[i].textContent = `${cattxt[i].dataset.apparel}`;
    }

    filter.onclick = () => {
        if (filter.dataset.toggle === "off") {
            filter.dataset.toggle = "on";
            filtermenu.style.width = "27%";
            filtermenu.style.opacity = "1";
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
            for (i = 0; i < menuitems.length; i++) {
                if (i === target) {
                    currentMenu = document.querySelector(`.dropdown.${menuitems[i].children[0].dataset.type}`);
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
                    otherMenu = document.querySelector(`.dropdown.${menuitems[i].children[0].dataset.type}`);
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

    // Slideshow...........................
    // Automatic
    // var slideindex = 0;
    // var slides = document.querySelectorAll(".slider");
    // function slideshow() {
    //     slides.forEach((slides) => {
    //         slides.style.display = 'none';
    //     })
    //     slideindex++;
    //     if (slideindex > slides.length-1) slideindex = 0;
    //     slides[slideindex].style.display = 'block';
    //     setTimeout(slideshow,4000);
    // }
    // slideshow();
    // // Manual
    // var dots = document.querySelectorAll(".dot");
    // dots.forEach((dots) => {
    //     dots.onclick = () => {
    //         var slide = document.querySelector(`${this.slide}"`);
    //         slide.style.display = 'none';
    //     }
    // });
});