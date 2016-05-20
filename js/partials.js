$(function () {
    $.get("partials/nav.html", function(data){
        $("nav").html(data);
    });
});
