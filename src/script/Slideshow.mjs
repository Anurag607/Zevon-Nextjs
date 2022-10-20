// Slideshow...........................

// Automatic

const slideshow = () => {
    var slideindex = 0;
    var slides = document.querySelectorAll(".slider");

    slides.forEach((slides) => {
        slides.style.display = 'none';
    });

    slideindex++;

    if (slideindex > slides.length - 1) slideindex = 0;

    slides[slideindex].style.display = 'block';
    setTimeout(slideshow, 4000);

    var dots = document.querySelectorAll(".dot");
    dots.forEach((dots) => {
        dots.onclick = () => {
            var slide = document.querySelector(`${this.slide}"`);
            slide.style.display = 'none';
        }
    });
}

export { slideshow };