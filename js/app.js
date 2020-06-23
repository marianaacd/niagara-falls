

var button = document.getElementById("toTop");
button.style.display = "none";

document.querySelector("body").onscroll = function(){
    if (window.scrollY > 150){
        button.style.display = "block";
    } else  {
        button.style.display = "none";
    }
};

const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navlinks = document.querySelectorAll('.links li');
    //toggle
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ''
            } else {
               link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 1}s`;
            }
           });

        burger.classList.toggle('toggle');


    });
    
    
}


navslide();
