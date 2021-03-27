// NETWORKING PART:
var socket = new WebSocket('ws://127.0.0.1:8181/', 'chat');
var name = 'u1'
socket.onopen = function () {

    name = "name" + Math.floor(Math.random() * Math.floor(700));

    socket.send('{"type": "join", "name":" ' + name + '"}');
}
$('#sendBtn').on('click', function (e) {
    e.preventDefault();
    send();
    msg = $('#msg').val();
    socket.send('{"type": "msg", "msg": "' + msg + '"}');
    $('#msg').val('');
});
socket.onmessage = function (answer) {
    var data = JSON.parse(answer.data);
    if (data.type == "msg") {
        if (msg != data.msg) {
            insertChat("me", data.msg, 1500);
        }
    }
};


//CHAT ANIMATIONS:

var me = {};

var you = {};

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0) {
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me") {

        control = '<li style="width:100%">' +
            '<div class="msj macro">' +
            '<div class="text text-l">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
    } else {
        control = '<li style="width:100%;">' +
            '<div class="msj-rta macro">' +
            '<div class="text text-r">' +
            '<p>' + text + '</p>' +
            '<p><small>' + date + '</small></p>' +
            '</div>' +
            '<div class="avatar" style="padding:0px 0px 0px 10px !important"></div>' +
            '</li>';
    }
    setTimeout(
        function () {
            $("ul").append(control);

        }, time);

}

function resetChat() {
    $("ul").empty();
}

function send() {
    var text = $("#msg").val();
    if (text !== "") {
        insertChat("you", text);
        $(this).val('');
    }
};

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("me", "Hallo!", 1000);
insertChat("me", "Welche Fragen zu der Impfung möchtest du stellen?", 2000);
insertChat("me", "Schreib mal was!", 120000);

//-- NOTE: No use time on insertChat.

