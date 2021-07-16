$(document).ready(function() {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})