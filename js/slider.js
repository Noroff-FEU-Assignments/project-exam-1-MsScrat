var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slide = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName("dot");

    if (n > slide.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slide.length}
        for (i = 0; i < slide.length; i++) {slide[i].style.display = "none"}
        for (i = 0; i < dot.length; i++) {dot[i].className = dot[i].className.replace("  active", "");}

    slide[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className +=  "  active";
}