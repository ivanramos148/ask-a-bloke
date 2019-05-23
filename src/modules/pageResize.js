import $ from 'jquery';

export function initResizePage(){
  if ($(window).width() > 768) {
      $('#onlyWhenEdit').css('position','fixed');
   }
}


export function resizePage(){
  $(window).resize(function() {
    if ($(window).width() > 768) {
        $('#onlyWhenEdit').css('position','fixed');
     } else {
       $('#onlyWhenEdit').css('position','');
     }
   });
}
