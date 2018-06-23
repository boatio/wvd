$.get("https://ipinfo.io", function(response) {
    $("#ip1").text(response.ip);
}, "jsonp");
