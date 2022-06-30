$(document).ready(function(){
    $(".nav-item").mouseenter(function(){
       // $(".dropdown-menu").css("display","block");
      $(".dropdown-menu").css("border-top", "3px solid #f26f21");
      })
    $(".nav-item").mouseleave(function(){
        $(".dropdown-menu").css("border-top", "0");
        });

        $( "#target" ).click(function() {

           $(".navbar-nav").css("visibility","hidden")
           $(".d-none").addClass('d-block').removeClass('d-none');
           return false;

          });
         
  });

  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})