      $(document).ready(function(){
        $('.main-clients_box').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: '<button type="submit" class="prev">&lt;</button>',
          nextArrow: '<button type="submit" class="next">&gt;</button>',
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      });