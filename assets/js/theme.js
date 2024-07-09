
      (function ($) {"use strict";
      
      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
    
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });
    
      //Animation
    
      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });
    
      //Menu On Hover
    
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });
    
    
    
    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// tags 필터링
$(document).ready(function() {
  $('.bsts-tag-list a').on('click', function(e) {
    e.preventDefault();
    var tag = $(this).data('tag');

    $(this).toggleClass('selected');

    var selectedTags = [];
    $('.bsts-tag-list a.selected').each(function() {
      selectedTags.push($(this).data('tag'));
    });

    filterPosts(selectedTags);
  });

  function filterPosts(tags) {
    $('.post').each(function() {
      var postTags = $(this).data('tags').split(' ');

      if (tags.length === 0 || tags.some(tag => postTags.includes(tag))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
});
