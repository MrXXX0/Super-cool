// Connect to the server
const socket = io();

// Get the message form and chat log element
const messageForm = document.getElementById('message-form');
const chatLog = document.getElementById('chat-log');

// Add event listener to the message form
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the message input element and the value
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  // Clear the message input
  messageInput.value = '';

  // Send the message to the server
  socket.emit('message', message);
});

// Listen for incoming messages from the server
socket.on('message', (message) => {
  // Create a new message element and append it to the chat log
  const newMessage = document.createElement('li');
  newMessage.textContent = message;
  chatLog.appendChild(newMessage);
});
