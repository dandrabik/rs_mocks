
// scrolling cards code
$(function() {
  $('.js-scrollable.js-learning-path').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ],
    prevArrow: "<i class='fas fa-chevron-left arrow float-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right arrow float-right'></i>"
  });

  $('.js-scrollable.js-section').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ],
    prevArrow: "<i class='fas fa-chevron-left arrow float-left'></i>",
    nextArrow: "<i class='fas fa-chevron-right arrow float-right'></i>"
  });
})