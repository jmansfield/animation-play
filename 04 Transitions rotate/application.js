// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('.event-action').on('click', '.buy-button', function() {
    $('.modal-overlay').addClass('active');
    $('.modal').addClass('active');
  });
  $('.modal-header').on('click', '.modal-close', function() {
    $('.modal-overlay').removeClass('active');
    $('.modal').removeClass('active');
  });
});
