$(document).ready(function(){
  var tabsItem = $(".tabs-list__item");
  var contentItem = $(".tabs__preview");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs-list__item--active");
    $(this).addClass("tabs-list__item--active");
    contentItem.removeClass("tabs__preview--active");
    $(activeContent).addClass("tabs__preview--active");
  });
  
  $(".").on("click", function (event) {

  });
});