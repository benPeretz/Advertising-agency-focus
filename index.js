



const navEl=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{

    if(window.scrollY>=56){
        navEl.classList.add("navbar-scrolled");
        navEl.classList.remove("white");
    }else if(window.scrollY<56){
        navEl.classList.remove("navbar-scrolled");
        navEl.classList.add("white");

    }

});

// $(".icons").hover(function(){
//     // On hover, increase the font-size by 1rem
//     $(this).css("font-size", "+=0.2rem");
// }, function(){
//     // On hover out, revert back to the original font-size
//     $(this).css("font-size", ""); // Resets font-size to its default value
// });


// $("section-contact-us h4").hover(function(){

//     (this).css("color","#f5a73f");
// },function(){
//     $(this).css("color","#bf9359");
// });
