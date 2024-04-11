$(document).ready(function() {
    $('.chat-icon').click(function() {
      $('.chat-box').toggleClass('active');
    });
  
    $('.send-btn').click(function() {
      sendMessage();
    });
  
    $('.message-input').keypress(function(event) {
      if (event.which == 13) {
        sendMessage();
      }
    });
  
    function sendMessage() {
      var message = $('.message-input').val();
      if (message.trim() !== '') {
        $('.messages').append('<div class="message user-message">' + message + '</div>');
        $('.message-input').val('');
        // Cuộn xuống dưới cùng của hộp thoại tin nhắn sau khi gửi
        $('.messages').scrollTop($('.messages')[0].scrollHeight);
        if (message.toLowerCase() === 'xin chào' || message.toLowerCase() ==='hello') {
            replyMessage('chào bạn, bạn cần hỗ trợ gì ?');
          }else if(message.toLowerCase().includes('tôi')){
            replyMessage('Vui lòng để lại số điện thoại và email, chúng tôi sẽ tư vấn cho bạn .')
          }
          else if(message.toLowerCase().includes('mày')){
            replyMessage('Chỉ cần bạn có mặt thắng thua không quan trọng ')
          }
      }
    }
    function replyMessage(reply) {
        // Thêm tin nhắn của chat bot vào hộp thoại
        $('.messages').append('<div class="message bot-message">' + reply + '</div>');
        // Cuộn xuống dưới cùng của hộp thoại tin nhắn sau khi trả lời
        $('.messages').scrollTop($('.messages')[0].scrollHeight);
      }
  });
  