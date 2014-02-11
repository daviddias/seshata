buzzardClient = require('buzzard').client;

$(document).ready(function () {
  // Switch from empty anchors to id-ed headings
  $('a[name]').get().forEach(function (i) {
    var $i = $(i);

    $i.next().attr('id', $i.attr('name'));
    $i.detach();
  });

  $('.scroll-spy-target').on('activate.bs.scrollspy', function (event) {
    var $this = $(this);
    var $target = $(event.target);

    $this.scrollTo($target, 0, {
      offset: -($this.innerHeight() / 2)
    });
  });

  function truncate(json, length) {
    if (length === null) {
      length = 20;
    }

    var split = json.split('\n');

    if (split.length <= length) {
      return json;
    }

    return split.slice(0, length).join('\n') + '\n...';
  }

  $('[data-route]').each(function () {
    var $this = $(this);
    var $target = $($this.attr('data-target'));
    var route = $this.attr('data-route');
    var length = $this.attr('data-truncate') || Infinity;

    var method = $this.attr('data-method');
    var body = $this.attr('data-body');


    $this.click(function () {
      console.log('1', buzzardClient);
      console.log('2', auth);

      var header;
      if (auth){
        header = buzzardClient.header(auth.buzzard.credentials);
      }

      var body_ready;

      if (body !== ''){
        var editable_body = $this.attr('data-target') + '-data-body';
        body_ready = JSON.parse($(editable_body).text());
      }


      $target.text('Loading ' + route + ' ...');

      $.ajax(route, {
        type: method,
        data: body_ready,
        success: function (data) {
          var json = truncate(JSON.stringify(data, null, 2), length);
          $target.text(json);
        },
        headers: {
          'Authorization': header
        }
      });
    });
  });
});
