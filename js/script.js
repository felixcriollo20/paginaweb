let botonmenu = document.getElementById ("bolo");
let menu = document.getElementById ('nava2');

botonmenu.addEventListener("click", function(){
    if (menu.classList.contains("pull")){
        menu.classList.add ("pull-visible");
        menu.classList.remove ("pull");
    } else {
        menu.classList.remove("pull-visible");
        menu.classList.add ("pull");
    }
});