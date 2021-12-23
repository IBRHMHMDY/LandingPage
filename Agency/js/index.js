
function scrollMove(){
    if(document.documentElement.scrollTop > 200) {
        document.getElementById("navbar").classList.add("notransparent");
    }else{
        document.getElementById("navbar").classList.remove("notransparent");
    }
}

window.onscroll = function(){
    scrollMove();
};

window.onload = function () {
    let website = new CountUp('website-count',0,250,0,2.5);
    website.start();
    let app = new CountUp('app-count',0,100,0,2.5);
    app.start();
    let users = new CountUp('users-count',0,10000,0,2.5);
    users.start();
    let video = new CountUp('editing-count',0,300,0,2.5);
    video.start();
    
};


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  document.getElementById("fullYear").innerHTML = new Date().getFullYear();