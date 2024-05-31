document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        var subMenu = document.getElementById("subMenu");
        var userPic = document.querySelector(".user-pic"); // Assuming this is the element that toggles the menu
    });

    // Function to open the menu
    document.querySelector(".user-pic").addEventListener('click', function(event) {
        var subMenu = document.getElementById("subMenu");
        subMenu.classList.add("open-menu");
        event.stopPropagation(); // Prevent the document click listener from immediately closing the menu
    });
});
function offMenu() {
    var subMenu = document.getElementById("subMenu");
    if (subMenu.classList.contains("open-menu")) {
        subMenu.classList.remove("open-menu"); // Ensure this matches your CSS for hiding the menu
    }
}
$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        }else{
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
})