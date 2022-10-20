// Searchbox...........................

import { opacity } from "styled-system";

const search = () => {
    var search = document.querySelector("#searchbox");
    var searchinput = search.children[0];
    var searchico = document.querySelector("#search-img");
    searchico.onclick = () => {
        if (searchico.dataset.toggle == "off") {
            searchinput.style.display = "block";
            searchico.dataset.toggle = "on";
            setTimeout(() => {
                searchinput.style.width = "12.5rem";
                search.style.transform = "translateX(-5%)";
                searchinput.style.opacity = "1"
            },0)
        }
        else {
            searchinput.style.width = "0";
            searchinput.style.opacity = "0"
            searchico.dataset.toggle = "off";
            search.style.transform = "translateX(-27.5%)";
            setTimeout(() => {
                searchinput.style.display = "none";
            },300)
        }
    }
}

export { search };