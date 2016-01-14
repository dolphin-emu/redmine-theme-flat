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

    // add fork us on GitHub link
    var menu = $("#main-menu>ul").append("<li class='float'><a href='https://dolphin-emu.org/'>Official Website</a></li>");
    var menu = $("#main-menu>ul").append("<li class='float'><a href='https://github.com/dolphin-emu/dolphin'>GitHub Project</a></li>");
    var menu = $("#main-menu>ul").append("<li class='float'><a href='https://forums.dolphin-emu.org/'>Forums</a></li>");
    var menu = $("#main-menu>ul").append("<li class='float'><a href='https://wiki.dolphin-emu.org/'>Wiki</a></li>");
  });

})(jQuery);
