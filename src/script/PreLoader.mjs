// Pre-Loader...........................

const preLoader = () => {

    let preLoader = document.querySelector('#preloader');

    window.addEventListener('load', () => {

        preLoader.style.opacity = '0';
        setTimeout(() => {
            preLoader.style.display = "none";
        }, 100);

    });
}

export { preLoader };