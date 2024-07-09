
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

$(document).ready(function() {
  // 태그 클릭 이벤트 처리
  $('.bsts-tag-list a').on('click', function(e) {
    e.preventDefault();
    var tag = $(this).data('tag');

    // 선택한 태그를 클래스 토글
    $(this).toggleClass('selected');

    // 선택된 태그 목록 생성
    var selectedTags = [];
    $('.bsts-tag-list a.selected').each(function() {
      selectedTags.push($(this).data('tag'));
    });

    // 포스트 필터링
    filterPosts(selectedTags);
  });

  function filterPosts(tags) {
    $('.post').each(function() {
      var postTags = $(this).data('tags').split(' ');

      // 선택된 태그가 하나라도 포함되어 있으면 표시, 아니면 숨김
      if (tags.length === 0 || tags.some(tag => postTags.includes(tag))) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
});
