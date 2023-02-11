var socket = io();
var chatWindow = document.getElementById('chat-window');
var chatInput = document.getElementById('chat-input');
var chatSubmit = document.getElementById('chat-submit');

socket.on('message', function(message) {
  chatWindow.innerHTML += '<p>' + message + '</p>';
});

chatSubmit.addEventListener('click', function() {
  socket.emit('message', chatInput.value);
  chatInput.value = '';
});
