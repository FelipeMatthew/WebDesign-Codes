(function(){

    var $btn = document.querySelector(".header-nav__hamburgger");
    var $html = document.querySelector("html");

    $html.classList.remove("no-js");
    $html.classList.add("js");

    $btn.addEventListener("click", function(e){
        $html.classList.toggle("menu-opened");
    })
})()