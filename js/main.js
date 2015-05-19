$(function() {
  // Mobile hamburger menu
  $('.navbarToggle').click(function() {
    $('.mainNav').slideToggle("fast");
  });

  // Pickadate
  $('input#arrive, input#depart').pickadate();

  // Selectric
  $('select').selectric();
});