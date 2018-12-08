let clock_container = $("#clock");
let server_time = clock_container.data("timestamp") * 1000;
server_time = new Date(server_time);
clock_container.html(server_time.toUTCString());

setInterval(function(){
    server_time.setUTCSeconds(server_time.getUTCSeconds()+1);
    clock_container.html(server_time.toUTCString());
}, 1000);