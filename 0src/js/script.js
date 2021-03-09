@@include('jquery-1.11.0.min.js')
@@include('slick.min.js')
$(document).ready(function(){
  $('.titel__slaider').slick({
  		dots:true
  });
  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    }else{
      document.querySelector('body').classList.add('no-webp');
    }
    });
});