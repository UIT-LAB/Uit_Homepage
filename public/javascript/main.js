$(document).ready(function() {
    $(".tab_title li").click(function() {
      var idx = $(this).index();
      $(".tab_title li").removeClass("click");
      $(".tab_title li").eq(idx).addClass("click");
      $(".tab_content > div").hide();
      $(".tab_content > div").eq(idx).show();
    })
  });