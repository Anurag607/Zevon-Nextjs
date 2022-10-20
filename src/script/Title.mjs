// Title Background...........................

var bgindex = 0;

const titlebg = () => {
    var title = document.querySelector('#title');
    var imgs = ['/mt1rs.jpg', '/mt2rs.jpg', '/mt3rs.jpg', '/mt4rs.jpg', '/mt5rs.jpg'];

    title.style.backgroundImage = 'url(' + imgs[bgindex] + ')';
    bgindex++;

    if (bgindex > imgs.length - 1) bgindex = 0;

    setTimeout(titlebg, 5000);
}

export { titlebg };