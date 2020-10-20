$(document).ready(function(){
  var tabsItem = $(".tabs-list__item");
  var contentItem = $(".tabs__preview");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs-list__item--active");
    $(this).addClass("tabs-list__item--active");
    contentItem.removeClass("tabs__preview--active");
    $(activeContent).addClass("tabs__preview--active");
    tabsItem.removeClass("tabs-list__item--expanded");
  });
  
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".tabs__recommend");
    if(windowWidth < 580){
      elem.addClass('tabs__recommend--mobile')
    }
    else{
      elem.removeClass('tabs__recommend--mobile')
    }
  }

  checkWidth(); 

  $(window).resize(function(){
    checkWidth();
  });

  var recommendItem = $(".tabs__recommend--mobile");
  var tabsListItem = $(".tabs-list__item");

  recommendItem.on("click", function (event) {
    tabsListItem.toggleClass("tabs-list__item--expanded");
  });

  var bookmarkRed = $(".newsline__bookmark")

  bookmarkRed.on("click", function (event) {
    $(this).toggleClass("newsline__bookmark--active");
  });
  
  var burgerMenu = $(".burger-menu")
  var mobileMenu = $(".mobile-menu")
  burgerMenu.on("click", function (event) {
    mobileMenu.toggleClass("mobile-menu--visible");
  });

  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  });

  $(".newsletter-form").validate({
    errorClass: "invalid",
    rules: {
      newsletter_email: {
        required: true,
        
      },
    },
    messages: {
      newsletter_email: {
        required: "Required field",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
});