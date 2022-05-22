    $(document).on('ready', function() {
      //
      $('.slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '1em',
        infinite: false,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
      });
      $('li button').on('click', function( e ) {
        e.stopPropagation();
      });
      $('.slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide == 0) {
        
        }
        if (currentSlide == 1) {

       
      
      } else {
       
      }
        if (currentSlide == 2) {
        
        }
      });
    });
   
