// This is a manifest file that'll be compiled into application.js, which will include all the files
//
// listed below.
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
// compiled file.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .

pageReady = function (){

  //  a warning message will display if this doesn't work
  $('.js-test-hidden').hide();

  //  hide all togglable sections
  //  use JS instead of CSS for graceful degredation / progressive enhancement
  $('.skills, .skill-details, .experience').hide()

  // event listeners for primary links
  $(".primary-links .clickable").click(function(e){
    e.preventDefault();
    $el = $(e.currentTarget);
    window.location.hash = $el.attr("href");
    $target = $(("." + $el.attr("data-target")));
    $targetClone = $target.clone(true, true);
    $('.focus-area-1').empty().append($targetClone)
    $targetClone.fadeIn();
  });

  // event Listeners for Skills sections
  $('.skills .clickable').click(function(e){
    e.preventDefault();
    $el = $(e.currentTarget);
    window.location.hash = $el.attr("href");
    $target = $(("." + $el.attr("data-target")));
    $targetClone = $target.clone(true, true);
    $(".focus-area-2").empty().append($targetClone)
    $targetClone.fadeIn();
  })
}

$(function () { pageReady() })
