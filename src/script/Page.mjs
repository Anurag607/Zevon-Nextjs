// Paginator...........................

const paginator = () => {
    var next = document.querySelector("#next");
    var prev = document.querySelector("#prev");
    var card = document.querySelectorAll(".cardCont");
    var carddivs = card.length;
    var cardindex = 0;

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
export { paginator };