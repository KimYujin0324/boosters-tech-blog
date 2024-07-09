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

