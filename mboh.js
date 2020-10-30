$(document).ready(function() {

  $(window).scroll(function () { 

    // console.log($(window).scrollTop());

    if ($(window).scrollTop() > 250) {
      $('#nav_bar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 251) {
      $('#nav_bar').removeClass('fixed-top');
    }
  });
});


// var s1 = document.getElementById("s1");
// var s2 = document.getElementById("s2");
// var s3 = document.getElementById("s3");
// var pilih1 = document.getElementById("pilih1");
// var pilih2 = document.getElementById("pilih2");
// var pilih3 = document.getElementById("pilih3");

function season1() {
   $('#s1').removeClass('d-none');
   $('#s2').addClass('d-none');
   $('#s3').addClass('d-none');
   $('#pilih1').addClass('active');
   $('#pilih2').removeClass('active');
   $('#pilih3').removeClass('active');
}

function season2() {
   $('#s1').addClass('d-none');
   $('#s2').removeClass('d-none');
   $('#s3').addClass('d-none');
   $('#pilih1').removeClass('active');
   $('#pilih2').addClass('active');
   $('#pilih3').removeClass('active');
}

function season3() {
   $('#s1').addClass('d-none');
   $('#s2').addClass('d-none');
   $('#s3').removeClass('d-none');
   $('#pilih1').removeClass('active');
   $('#pilih2').removeClass('active');
   $('#pilih3').addClass('active');
}


document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
