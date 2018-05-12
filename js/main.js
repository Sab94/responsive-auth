$('.password-container .fa-eye,.password-container .fa-eye-slash').click(function () {
   $('.fa-eye').toggle();
   $('.fa-eye-slash').toggle();
   if($('.fa-eye').is(':visible')){
       $('#password').attr('type','password');
   }
   else{
       $('#password').attr('type','text');
   }

});
