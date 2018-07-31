import 'owl.carousel';
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    navContainer: '.carousel__navigations',
    navText: [],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        450:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        1100:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
});


$("[data-fancybox]").fancybox({
    speed: 330,
    buttons: ["close"],
    image: {
        protect: true
    }
});
