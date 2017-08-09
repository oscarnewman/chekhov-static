$(document).ready(function () {
  $(document).on('click', '.guest-cell:not(.-open)', function () {
    $(this).toggleClass('-checked');
  }).find('.toggle').click(function () {
    return false;
  });

  $('.toggle').click(function () {
    var $cell = $(this).closest('.guest-cell');
    $cell.toggleClass('-open');
    $('.guest-cell').not($cell).removeClass('-open');
  })

  $('.search-bar').on('input', function () {
    const q = this.value.toLowerCase();

    if(q.length === 0) {
      $('.guest-cell').show();
      return;
    }

    $('.guest-cell').show().filter(function (i) {
      const title = $(this).find('.title').text().toLowerCase();
      const id = $(this).find('.detail').text().toLowerCase();
      const keep = (title.indexOf(q) !== -1)
                || (id.indexOf(q) !== -1);
      return !keep;
    }).hide();
  });
});
