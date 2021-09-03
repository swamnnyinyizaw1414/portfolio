new WOW().init();
              
// slick
$('.review-slick').slick({
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 1409,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 993,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

//nav
let header=document.querySelector(".header");
let scrollToTop=document.querySelector(".scrollToTop");

var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        console.log(direction);
        if(direction==="down"){
            header.classList.add("shadow");
            header.classList.add("animate__slideInDown");
          }else{
            header.classList.remove("shadow");
            header.classList.remove("animate__slideInDown");     
       
        }
    },
    offset: '45%'

  });

  function changeMode(){
    document.body.classList.toggle("day-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun")
  }

  let screenHeight=$(window).height();

  $(window).scroll(function(){
    let currentPosition=$(this).scrollTop();
    if(currentPosition<screenHeight-500){
      $(".nav-link").removeClass("active");
      $(".nav-link[href='#home']").addClass("active");
    }
  })

  var waypoints = $('#about').waypoint(function(direction) {
    if(direction == "down"){
        $(".nav-link").removeClass("active");
        $(".nav-link[href='#about']").addClass("active");
        if($(".nav-link").hasClass("active")){

        }
      }
        },{ offset:'150px' });

  var waypoints = $('#about').waypoint(function(direction) {
    if(direction == "up"){
        $(".nav-link").removeClass("active");
        $(".nav-link[href='#about']").addClass("active");
      }
        },{ offset:'-30%' });

  var waypoints = $('#services').waypoint(function(direction) {
    if(direction == "down"){
        $(".nav-link").removeClass("active");
        $(".nav-link[href='#services']").addClass("active");
      }
        },{ offset:'150px' });
        
  var waypoints = $('#services').waypoint(function(direction) {
    if(direction == "up"){
        $(".nav-link").removeClass("active");
        $(".nav-link[href='#services']").addClass("active");
      }
        },{ offset:'-50%' });

  var waypoints = $('#skills').waypoint(function(direction) {
    if(direction == "down"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#skills']").addClass("active");
        }
         },{ offset:'150px' });
                
  var waypoints = $('#skills').waypoint(function(direction) {
    if(direction == "up"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#skills']").addClass("active");
        }
          },{ offset:'-120%' });

  var waypoints = $('#portfolio').waypoint(function(direction) {
    if(direction == "down"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#portfolio']").addClass("active");
        }
          },{ offset:'150px' });
                        
  var waypoints = $('#portfolio').waypoint(function(direction) {
    if(direction == "up"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#portfolio']").addClass("active");
        }
          },{ offset:'-80%' });

  var waypoints = $('#blog').waypoint(function(direction) {
    if(direction == "down"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#blog']").addClass("active");
        }
          },{ offset:'150px' });
                                
  var waypoints = $('#blog').waypoint(function(direction) {
    if(direction == "up"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#blog']").addClass("active");
        }
          },{ offset:'-120%' });

  var waypoints = $('#contact').waypoint(function(direction) {
    if(direction == "down"){
          $(".nav-link").removeClass("active");
          $(".nav-link[href='#contact']").addClass("active");
        }
          },{ offset:'150px' });

      // // services hover
      //     $('.services-card.one').hover(function(){
      //       $('.services-text.one').css("color","#D02FA4");
      //   }, function() {
      //       $('.services-text.one').css("color","#939495");
      //   });

      //     $('.services-card.two').hover(function(){
      //       $('.services-text.two').css("color","#D02FA4");
      //   }, function() {
      //       $('.services-text.two').css("color","#939495");
      //   });

      //     $('.services-card.three').hover(function(){
      //       $('.services-text.three').css("color","#D02FA4");
      //   }, function() {
      //       $('.services-text.three').css("color","#939495");
      //   });

        // services hover red
        $(".red").click(function(){
          $(".services-card").addClass("services-card-red");
        })
        $('.services-card-red.services-card.one').hover(function(){
          $('.services-text.one').css("color","red");
      }, function() {
          $('.services-text.one').css("color","transparent");
      });

        $('.services-card-red.services-card.two').hover(function(){
          $('.services-text.two').css("color","red");
      }, function() {
          $('.services-text.two').css("color","transparent");
      });

        $('.services-card-red.services-card.three').hover(function(){
          $('.services-text.three').css("color","red");
      }, function() {
          $('.services-text.three').css("color","transparent");
      });

      // nav
        $(".nav-link").click(function() {
          console.log("hello");
          $(".navbar-container").removeClass("show");
          $(".menu-icon").removeClass("fa-times");
          $(".menu-icon").addClass("fa-bars");
        });

        //nav-toggler
        $(".menu-icon").click(function(){
          if($(".navbar-collapse").hasClass("show")){
            $(".menu-icon").removeClass("fa-times");
            $(".menu-icon").addClass("fa-bars");
          }else{ 
            $(".menu-icon").removeClass("fa-bars");
            $(".menu-icon").addClass("fa-times");
          }
          if($(".navbar-toggler").hasClass("collapsed")){
            $(".menu-icon").removeClass("fa-times");
            $(".menu-icon").addClass("fa-bars");
          }else{
            $(".menu-icon").removeClass("fa-bars"); 
            $(".menu-icon").addClass("fa-times");
          }
        })

        $(".change-color").click(function(){
          $(".color-display").toggleClass("d-flex");
          $(".color-display").toggleClass("animate__animated animate__fadeInDown");
        })

        // title color
        // changing color of title red
        $(".red").click(function(){
          $(".change-color-obj").css("color","red");
        })

        // changing color of title green
        $(".green").click(function(){
          $(".change-color-obj").css("color","#0ea804");
        })

        // changing color of title info
        $(".blue").click(function(){
          $(".change-color-obj").css("color","#1726b5");
        })

         // changing color of title info
         $(".warning").click(function(){
          $(".change-color-obj").css("color","#ffc107");
        })

        // reviews dots color
        // reviews dots change-color red
        $(".red").click(function(){
          $(".slick-dots li").css("border","1px solid red");
          $(".slick-dots li").css("background-color","red");
          $(".review-card").removeClass("review-green");
          $(".review-card").removeClass("review-info");
          $(".review-card").removeClass("review-warning");
          $(".review-card").addClass("review-red");
        })
        
        // reviews dots change-color green
        $(".green").click(function(){
          $(".slick-dots li").css("border","1px solid #0ea804");
          $(".slick-dots li").css("background-color","#0ea804");
          $(".review-card").removeClass("review-red");
          $(".review-card").removeClass("review-info");
          $(".review-card").removeClass("review-warning");
          $(".review-card").addClass("review-green");
        })

        // reviews dots change-color info
        $(".blue").click(function(){
          $(".slick-dots li").css("border","1px solid #1726b5");
          $(".slick-dots li").css("background-color","#1726b5");
          $(".review-card").removeClass("review-red");
          $(".review-card").removeClass("review-green");
          $(".review-card").removeClass("review-warning");
          $(".review-card").addClass("review-info");
        })

        // reviews dots change-color warning
        $(".warning").click(function(){
          $(".slick-dots li").css("border","1px solid #ffc107");
          $(".slick-dots li").css("background-color","#ffc107");
          $(".review-card").removeClass("review-red");
          $(".review-card").removeClass("review-green");
          $(".review-card").removeClass("review-info");
          $(".review-card").addClass("review-warning");
        })

        // review-card change hover red
        // card1
        $('.review-card.one').mouseover(function(){
          if($(".review-card.one").hasClass("review-red")){
              $('.review-card.one').css("border-bottom","2px solid red");
          }
      });

      $('.review-card.one').mouseout(function(){
        if($(".review-card.one").hasClass("review-red")){
            $('.review-card.one').css("border-bottom","2px solid transparent");
        }
    });

    // card2
    $('.review-card.two').mouseover(function(){
      if($(".review-card.two").hasClass("review-red")){
          $('.review-card.two').css("border-bottom","2px solid red");
      }
  });

  $('.review-card.two').mouseout(function(){
    if($(".review-card.two").hasClass("review-red")){
        $('.review-card.two').css("border-bottom","2px solid transparent");
    }
});
// card3
$('.review-card.three').mouseover(function(){
  if($(".review-card.three").hasClass("review-red")){
      $('.review-card.three').css("border-bottom","2px solid red");
  }
});

$('.review-card.three').mouseout(function(){
if($(".review-card.three").hasClass("review-red")){
    $('.review-card.three').css("border-bottom","2px solid transparent");
}
});
// card4
$('.review-card.four').mouseover(function(){
  if($(".review-card.four").hasClass("review-red")){
      $('.review-card.four').css("border-bottom","2px solid red");
  }
});

$('.review-card.four').mouseout(function(){
if($(".review-card.four").hasClass("review-red")){
    $('.review-card.four').css("border-bottom","2px solid transparent");
}
});
// card5
$('.review-card.five').mouseover(function(){
  if($(".review-card.five").hasClass("review-red")){
      $('.review-card.five').css("border-bottom","2px solid red");
  }
});

$('.review-card.five').mouseout(function(){
if($(".review-card.five").hasClass("review-red")){
    $('.review-card.five').css("border-bottom","2px solid transparent");
}
});
// card6
$('.review-card.six').mouseover(function(){
  if($(".review-card.six").hasClass("review-red")){
      $('.review-card.six').css("border-bottom","2px solid red");
  }
});

$('.review-card.six').mouseout(function(){
if($(".review-card.six").hasClass("review-red")){
    $('.review-card.six').css("border-bottom","2px solid transparent");
}
});

// review-card change hover green
        // card1
        $('.review-card.one').mouseover(function(){
          if($(".review-card.one").hasClass("review-green")){
              $('.review-card.one').css("border-bottom","2px solid #0ea804");
          }
      });

      $('.review-card.one').mouseout(function(){
        if($(".review-card.one").hasClass("review-green")){
            $('.review-card.one').css("border-bottom","2px solid transparent");
        }
    });

    // card2
    $('.review-card.two').mouseover(function(){
      if($(".review-card.two").hasClass("review-green")){
          $('.review-card.two').css("border-bottom","2px solid #0ea804");
      }
  });

  $('.review-card.two').mouseout(function(){
    if($(".review-card.two").hasClass("review-green")){
        $('.review-card.two').css("border-bottom","2px solid transparent");
    }
});
// card3
$('.review-card.three').mouseover(function(){
  if($(".review-card.three").hasClass("review-green")){
      $('.review-card.three').css("border-bottom","2px solid #0ea804");
  }
});

$('.review-card.three').mouseout(function(){
if($(".review-card.three").hasClass("review-green")){
    $('.review-card.three').css("border-bottom","2px solid transparent");
}
});
// card4
$('.review-card.four').mouseover(function(){
  if($(".review-card.four").hasClass("review-green")){
      $('.review-card.four').css("border-bottom","2px solid #0ea804");
  }
});

$('.review-card.four').mouseout(function(){
if($(".review-card.four").hasClass("review-green")){
    $('.review-card.four').css("border-bottom","2px solid transparent");
}
});
// card5
$('.review-card.five').mouseover(function(){
  if($(".review-card.five").hasClass("review-green")){
      $('.review-card.five').css("border-bottom","2px solid #0ea804");
  }
});

$('.review-card.five').mouseout(function(){
if($(".review-card.five").hasClass("review-green")){
    $('.review-card.five').css("border-bottom","2px solid transparent");
}
});
// card6
$('.review-card.six').mouseover(function(){
  if($(".review-card.six").hasClass("review-green")){
      $('.review-card.six').css("border-bottom","2px solid #0ea804");
  }
});

$('.review-card.six').mouseout(function(){
if($(".review-card.six").hasClass("review-green")){
    $('.review-card.six').css("border-bottom","2px solid transparent");
}
});

// review-card change hover info
        // card1
        $('.review-card.one').mouseover(function(){
          if($(".review-card.one").hasClass("review-info")){
              $('.review-card.one').css("border-bottom","2px solid #1726b5");
          }
      });

      $('.review-card.one').mouseout(function(){
        if($(".review-card.one").hasClass("review-info")){
            $('.review-card.one').css("border-bottom","2px solid transparent");
        }
    });

    // card2
    $('.review-card.two').mouseover(function(){
      if($(".review-card.two").hasClass("review-info")){
          $('.review-card.two').css("border-bottom","2px solid #1726b5");
      }
  });

  $('.review-card.two').mouseout(function(){
    if($(".review-card.two").hasClass("review-info")){
        $('.review-card.two').css("border-bottom","2px solid transparent");
    }
});
// card3
$('.review-card.three').mouseover(function(){
  if($(".review-card.three").hasClass("review-info")){
      $('.review-card.three').css("border-bottom","2px solid #1726b5");
  }
});

$('.review-card.three').mouseout(function(){
if($(".review-card.three").hasClass("review-info")){
    $('.review-card.three').css("border-bottom","2px solid transparent");
}
});
// card4
$('.review-card.four').mouseover(function(){
  if($(".review-card.four").hasClass("review-info")){
      $('.review-card.four').css("border-bottom","2px solid #1726b5");
  }
});

$('.review-card.four').mouseout(function(){
if($(".review-card.four").hasClass("review-info")){
    $('.review-card.four').css("border-bottom","2px solid transparent");
}
});
// card5
$('.review-card.five').mouseover(function(){
  if($(".review-card.five").hasClass("review-info")){
      $('.review-card.five').css("border-bottom","2px solid #1726b5");
  }
});

$('.review-card.five').mouseout(function(){
if($(".review-card.five").hasClass("review-info")){
    $('.review-card.five').css("border-bottom","2px solid transparent");
}
});
// card6
$('.review-card.six').mouseover(function(){
  if($(".review-card.six").hasClass("review-info")){
      $('.review-card.six').css("border-bottom","2px solid #1726b5");
  }
});

$('.review-card.six').mouseout(function(){
if($(".review-card.six").hasClass("review-info")){
    $('.review-card.six').css("border-bottom","2px solid transparent");
}
});

// review-card change hover warning
        // card1
        $('.review-card.one').mouseover(function(){
          if($(".review-card.one").hasClass("review-warning")){
              $('.review-card.one').css("border-bottom","2px solid #ffc107");
          }
      });

      $('.review-card.one').mouseout(function(){
        if($(".review-card.one").hasClass("review-warning")){
            $('.review-card.one').css("border-bottom","2px solid transparent");
        }
    });

    // card2
    $('.review-card.two').mouseover(function(){
      if($(".review-card.two").hasClass("review-warning")){
          $('.review-card.two').css("border-bottom","2px solid #ffc107");
      }
  });

  $('.review-card.two').mouseout(function(){
    if($(".review-card.two").hasClass("review-warning")){
        $('.review-card.two').css("border-bottom","2px solid transparent");
    }
});
// card3
$('.review-card.three').mouseover(function(){
  if($(".review-card.three").hasClass("review-warning")){
      $('.review-card.three').css("border-bottom","2px solid #ffc107");
  }
});

$('.review-card.three').mouseout(function(){
if($(".review-card.three").hasClass("review-warning")){
    $('.review-card.three').css("border-bottom","2px solid transparent");
}
});
// card4
$('.review-card.four').mouseover(function(){
  if($(".review-card.four").hasClass("review-warning")){
      $('.review-card.four').css("border-bottom","2px solid #ffc107");
  }
});

$('.review-card.four').mouseout(function(){
if($(".review-card.four").hasClass("review-warning")){
    $('.review-card.four').css("border-bottom","2px solid transparent");
}
});
// card5
$('.review-card.five').mouseover(function(){
  if($(".review-card.five").hasClass("review-warning")){
      $('.review-card.five').css("border-bottom","2px solid #ffc107");
  }
});

$('.review-card.five').mouseout(function(){
if($(".review-card.five").hasClass("review-warning")){
    $('.review-card.five').css("border-bottom","2px solid transparent");
}
});
// card6
$('.review-card.six').mouseover(function(){
  if($(".review-card.six").hasClass("review-warning")){
      $('.review-card.six').css("border-bottom","2px solid #ffc107");
  }
});

$('.review-card.six').mouseout(function(){
if($(".review-card.six").hasClass("review-warning")){
    $('.review-card.six').css("border-bottom","2px solid transparent");
}
});

//blog hover
// change blog hover red
$(".red").click(function(){
  $(".blog-card").removeClass("blog-green");
  $(".blog-card").removeClass("blog-info");
  $(".blog-card").removeClass("blog-warning");
  $(".blog-card").addClass("blog-red");
})

// change blog hover green
$(".green").click(function(){
  $(".blog-card").removeClass("blog-red");
  $(".blog-card").removeClass("blog-info");
  $(".blog-card").removeClass("blog-warning");
  $(".blog-card").addClass("blog-green");
})

// change blog hover info
$(".blue").click(function(){
  $(".blog-card").removeClass("blog-red");
  $(".blog-card").removeClass("blog-green");
  $(".blog-card").removeClass("blog-warning");
  $(".blog-card").addClass("blog-info");
})

// change blog hover warning
$(".warning").click(function(){
  $(".blog-card").removeClass("blog-red");
  $(".blog-card").removeClass("blog-green");
  $(".blog-card").removeClass("blog-info");
  $(".blog-card").addClass("blog-warning");
})

//wskill
// change wskill progress-bar red
$(".red").click(function(){
  $(".progress-bar").removeClass("bg-success");
  $(".progress-bar").removeClass("bg-info");
  $(".progress-bar").removeClass("bg-warning");
  $(".progress-bar").addClass("bg-danger");
})

// change wskill progress-bar green
$(".green").click(function(){
  $(".progress-bar").removeClass("bg-danger");
  $(".progress-bar").removeClass("bg-info");
  $(".progress-bar").removeClass("bg-warning");
  $(".progress-bar").addClass("bg-success");
})

// change wskill progress-bar info
$(".blue").click(function(){
  $(".progress-bar").removeClass("bg-danger");
  $(".progress-bar").removeClass("bg-success");
  $(".progress-bar").removeClass("bg-warning");
  $(".progress-bar").addClass("bg-info");
})

// change wskill progress-bar warning
$(".warning").click(function(){
  $(".progress-bar").removeClass("bg-danger");
  $(".progress-bar").removeClass("bg-info");
  $(".progress-bar").removeClass("bg-success");
  $(".progress-bar").addClass("bg-warning");
})

//pskill
// change pskill hover red
$(".red").click(function(){
  $(".p-skill").removeClass("pskill-green");
  $(".p-skill").removeClass("pskill-info");
  $(".p-skill").removeClass("pskill-warning");
  $(".p-skill").addClass("pskill-red");
})

// change pskill hover green
$(".green").click(function(){
  $(".p-skill").removeClass("pskill-red");
  $(".p-skill").removeClass("pskill-info");
  $(".p-skill").removeClass("pskill-warning");
  $(".p-skill").addClass("pskill-green");
})

// change pskill hover info
$(".blue").click(function(){
  $(".p-skill").removeClass("pskill-red");
  $(".p-skill").removeClass("pskill-green");
  $(".p-skill").removeClass("pskill-warning");
  $(".p-skill").addClass("pskill-info");
})

// change pskill hover warning
$(".warning").click(function(){
  $(".p-skill").removeClass("pskill-red");
  $(".p-skill").removeClass("pskill-info");
  $(".p-skill").removeClass("pskill-green");
  $(".p-skill").addClass("pskill-warning");
})

// outline btn
// change outline btn red
$(".red").click(function(){
  $(".change-color-btn").removeClass("btn-outline-primary");
  $(".change-color-btn").removeClass("btn-outline-success");
  $(".change-color-btn").removeClass("btn-outline-info");
  $(".change-color-btn").removeClass("btn-outline-warning");
  $(".change-color-btn").addClass("btn-outline-danger");
})

// change outline btn green
$(".green").click(function(){
  $(".change-color-btn").removeClass("btn-outline-primary");
  $(".change-color-btn").removeClass("btn-outline-danger");
  $(".change-color-btn").removeClass("btn-outline-info");
  $(".change-color-btn").removeClass("btn-outline-warning");
  $(".change-color-btn").addClass("btn-outline-success");
})

// change outline btn blue
$(".blue").click(function(){
  $(".change-color-btn").removeClass("btn-outline-primary");
  $(".change-color-btn").removeClass("btn-outline-success");
  $(".change-color-btn").removeClass("btn-outline-danger");
  $(".change-color-btn").removeClass("btn-outline-warning");
  $(".change-color-btn").addClass("btn-outline-info");
})

// change outline btn warning
$(".warning").click(function(){
  $(".change-color-btn").removeClass("btn-outline-primary");
  $(".change-color-btn").removeClass("btn-outline-danger");
  $(".change-color-btn").removeClass("btn-outline-info");
  $(".change-color-btn").removeClass("btn-outline-success");
  $(".change-color-btn").addClass("btn-outline-warning");
})

// solid btn
// change solid btn red
$(".red").click(function(){
  $(".change-color-solid").removeClass("btn-primary");
  $(".change-color-solid").removeClass("btn-success");
  $(".change-color-solid").removeClass("btn-info");
  $(".change-color-solid").removeClass("btn-warning");
  $(".change-color-solid").addClass("btn-danger");
  $(".change-color-solid").css("color","#fff");
})

// change solid btn green
$(".green").click(function(){
  $(".change-color-solid").removeClass("btn-primary");
  $(".change-color-solid").removeClass("btn-danger");
  $(".change-color-solid").removeClass("btn-info");
  $(".change-color-solid").removeClass("btn-warning");
  $(".change-color-solid").addClass("btn-success");
  $(".change-color-solid").css("color","#fff");
})

// change solid btn info
$(".blue").click(function(){
  $(".change-color-solid").removeClass("btn-primary");
  $(".change-color-solid").removeClass("btn-danger");
  $(".change-color-solid").removeClass("btn-success");
  $(".change-color-solid").removeClass("btn-warning");
  $(".change-color-solid").addClass("btn-info");
  $(".change-color-solid").css("color","#fff");
})

// change solid btn warning
$(".warning").click(function(){
  $(".change-color-solid").removeClass("btn-primary");
  $(".change-color-solid").removeClass("btn-danger");
  $(".change-color-solid").removeClass("btn-info");
  $(".change-color-solid").removeClass("btn-success");
  $(".change-color-solid").addClass("btn-warning");
  $(".change-color-solid").css("color","#fff");
})

// nav brand color
// change red 
$(".red").click(function(){
  $(".brand").css("color","red");
  $(".brand").css("border","2px solid red")
})

// change green 
$(".green").click(function(){
  $(".brand").css("color","#0ea804");
  $(".brand").css("border","2px solid #0ea804")
})

// change info
$(".blue").click(function(){
  $(".brand").css("color","#1726b5");
  $(".brand").css("border","2px solid #1726b5")
})

// change warning 
$(".warning").click(function(){
  $(".brand").css("color","#ffc107");
  $(".brand").css("border","2px solid #ffc107")
})

// nav-link active color
// change red 
$(".red").click(function(){
  $(".nav-link").removeClass("nav-green");
  $(".nav-link").removeClass("nav-info");
  $(".nav-link").removeClass("nav-warning");
  $(".nav-link").addClass("nav-red");
})

// change green 
$(".green").click(function(){
  $(".nav-link").removeClass("nav-red");
  $(".nav-link").removeClass("nav-info");
  $(".nav-link").removeClass("nav-warning");
  $(".nav-link").addClass("nav-green");
})

// change info
$(".blue").click(function(){
  $(".nav-link").removeClass("nav-green");
  $(".nav-link").removeClass("nav-red");
  $(".nav-link").removeClass("nav-warning");
  $(".nav-link").addClass("nav-info");
})

// change warning 
$(".warning").click(function(){
  $(".nav-link").removeClass("nav-green");
  $(".nav-link").removeClass("nav-info");
  $(".nav-link").removeClass("nav-red");
  $(".nav-link").addClass("nav-warning");
})

// change menu-icon color
// change menu-icon red
$(".red").click(function(){
  $(".menu-icon").removeClass("text-primary");
  $(".menu-icon").removeClass("text-success");
  $(".menu-icon").removeClass("text-info");
  $(".menu-icon").removeClass("text-warning");
  $(".menu-icon").addClass("text-danger");
})

// change menu-icon green
$(".green").click(function(){
  $(".menu-icon").removeClass("text-primary");
  $(".menu-icon").removeClass("text-danger");
  $(".menu-icon").removeClass("text-info");
  $(".menu-icon").removeClass("text-warning");
  $(".menu-icon").addClass("text-success");
})

// change menu-icon blue
$(".blue").click(function(){
  $(".menu-icon").removeClass("text-primary");
  $(".menu-icon").removeClass("text-success");
  $(".menu-icon").removeClass("text-danger");
  $(".menu-icon").removeClass("text-warning");
  $(".menu-icon").addClass("text-info");
})

// change menu-icon warning
$(".warning").click(function(){
  $(".menu-icon").removeClass("text-primary");
  $(".menu-icon").removeClass("text-danger");
  $(".menu-icon").removeClass("text-info");
  $(".menu-icon").removeClass("text-success");
  $(".menu-icon").addClass("text-warning");
})

// change social-icon color
// change social-icon red
$(".red").click(function(){
  $(".social-icon").removeClass("text-primary");
  $(".social-icon").removeClass("text-success");
  $(".social-icon").removeClass("text-info");
  $(".social-icon").removeClass("text-warning");
  $(".social-icon").addClass("text-danger");
})

// change social-icon green
$(".green").click(function(){
  $(".social-icon").removeClass("text-primary");
  $(".social-icon").removeClass("text-danger");
  $(".social-icon").removeClass("text-info");
  $(".social-icon").removeClass("text-warning");
  $(".social-icon").addClass("text-success");
})

// change social-icon blue
$(".blue").click(function(){
  $(".social-icon").removeClass("text-primary");
  $(".social-icon").removeClass("text-success");
  $(".social-icon").removeClass("text-danger");
  $(".social-icon").removeClass("text-warning");
  $(".social-icon").addClass("text-info");
})

// change social-icon warning
$(".warning").click(function(){
  $(".social-icon").removeClass("text-primary");
  $(".social-icon").removeClass("text-danger");
  $(".social-icon").removeClass("text-info");
  $(".social-icon").removeClass("text-success");
  $(".social-icon").addClass("text-warning");
})

// change color-icon 
// change color-icon red
$(".red").click(function(){
  $(".fa-cog").removeClass("text-primary");
  $(".fa-cog").removeClass("text-success");
  $(".fa-cog").removeClass("text-info");
  $(".fa-cog").removeClass("text-warning");
  $(".fa-cog").addClass("text-danger");
})

// change color-icon green
$(".green").click(function(){
  $(".fa-cog").removeClass("text-primary");
  $(".fa-cog").removeClass("text-danger");
  $(".fa-cog").removeClass("text-info");
  $(".fa-cog").removeClass("text-warning");
  $(".fa-cog").addClass("text-success");
})

// change color-icon blue
$(".blue").click(function(){
  $(".fa-cog").removeClass("text-primary");
  $(".fa-cog").removeClass("text-success");
  $(".fa-cog").removeClass("text-danger");
  $(".fa-cog").removeClass("text-warning");
  $(".fa-cog").addClass("text-info");
})

// change color-icon warning
$(".warning").click(function(){
  $(".fa-cog").removeClass("text-primary");
  $(".fa-cog").removeClass("text-danger");
  $(".fa-cog").removeClass("text-info");
  $(".fa-cog").removeClass("text-success");
  $(".fa-cog").addClass("text-warning");
})


$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
      $(this).remove();
  })
})

                                        
                                  

  