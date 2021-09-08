// To show back to top button when the user scrools 50px from the top of the document

const scrollbutton = document.getElementById('myBtn')

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if (document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50){;
        scrollbutton.style.display = "block"
    }else{
        scrollbutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For other Browsers
}


// WOW JS to animate
new WOW().init();


// navbar animation
window.addEventListener('scroll', function(){
    var navbar = document.querySelector('.code-nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
   
  });


// active link
  $(document).on('click', '.navbar-nav .navbar-item', function(){
    $(this).addClass('active').siblings().removeClass('active');
  })