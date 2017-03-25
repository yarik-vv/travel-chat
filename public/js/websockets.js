(function() {
  const form = $('form[name="webchat"]');
  const input = $('form[name="webchat"] input');
  const ul = $('form[name="webchat"] ul');
  const scrollHeight = 999999;

  const socket = io('', {
    'reconnectionAttempts': 30,
    'reconnectionDelay': 500
  });

  socket
    .on('message', function(username, message) {
      printMessage(username+': '+ message);
      //ul.scrollTop = ul.scrollHeight;
    })
    .on('leave', function(username) {
      printStatus(username + " вышел из чата", "yellow");
    })
    .on('join', function(username) {
      printStatus(username + " вошёл в чат", "yellow");
    })
    .on('connect', function() {
      printStatus("Соединение установлено", "#d6f1e9");
      form.on('submit', sendMessage);
      input.prop('disabled', false);
    })
    .on('disconnect', function() {
      printStatus("Соединение потеряно", "#f1d6ee");
      printStatus("Пееродключение...", "#f1d6ee");
      form.off('submit', sendMessage);
      input.prop('disabled', true);
    })
    .on('logout', function() {
      location.href = "/";
    })
    .on('error', function(reason) {
      if(reason == "handshake unauthorized") {
        printStatus("Вы вышли из сайта");
      } 
    })
    .on('reconnect_failed', function() {
      printStatus("Соединение разорвано");
    });

  const sendMessage = function() {
    const text = input.val();
    socket.emit('message', text, function(data) {
      $('<li>')
        .text(text)
        .appendTo(ul)
        .addClass('my');
      ul.scrollTop(scrollHeight);
    });
    input.val('');
    return false;
  }

  const printMessage = function(text) {
    $('<li>')
      .text(text)
      .appendTo(ul)
      .addClass('nmy');
    ul.scrollTop(scrollHeight);
  }

  const printStatus = function(status, color) {
    $('<li>')
      .css('background-color', color)
      .addClass('log')
      .text(status)
      .appendTo(ul);
  }
})();
