function hello(){
    //alert("Die Welt ist schön")
}

$("#sender").click( function(){
 
    var name = 'u1',
    msg = $('#msg').val();
    $('#msgs').append(msg);
    $('#msg').val('');
});