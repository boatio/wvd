$.get("http://ipinfo.io", function(response) {
    $("#ip1").text(response.ip);
}, "jsonp");