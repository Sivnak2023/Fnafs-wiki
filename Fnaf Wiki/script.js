let burger = document.querySelector(".burger-menu");
let nav = document.querySelector(".navbar-collapse");

burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    
    // Evita que Bootstrap interfiera
    nav.classList.remove("show", "collapsing");
});

$('.carousel').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});