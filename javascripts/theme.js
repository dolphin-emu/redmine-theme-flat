(function($) {

  $(document).ready(function() {
    var update = $('#update')
    var close = $("<div>", {'class': "update-close"}).text('x');

    update.prepend(close);
    close.click(function() {
      update.hide();
    });

    // toggleFieldset();
    $('#update fieldset.tabular legend').click(function() {
      $(this).closest('fieldset').toggleClass('show-children');
    });

    // add fork us on github link
    var menu = $("#main-menu>ul").append("<li class='float'><a href='https://github.com/dolphin-emu/dolphin'>Github Project</a></li>");
  });

})(jQuery);
