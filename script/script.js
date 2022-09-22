$(document).ready(function(){
//  mainmenu
  $('.mainmenu').hover(function(){
    $(this).find('.submenu').stop().slideToggle()
  });
  
  
//  sub_navimenu
  $('.navimenu button').click(function(){
//    $(this).next().fadeIn();
    $(this).siblings('ul').fadeIn();
  });
  
  $('.navimenu ul').mouseleave(function(){
    $(this).fadeOut('slow');
  });
  
  
});



//banner slide
start()
var imgs = 1
var now = 0

function slide(){
  now = ( now == imgs )? 0:now+=1
  $('.imgslide img').eq(now).fadeIn();
  $('.imgslide img').eq(now-1).fadeOut();
}

function start(){
  $('.imgslide img').eq(0).siblings().fadeOut();
  setInterval(slide,3000)
}


//sub01_menu
function button(seq){
  
  var btnColor = $('.btn'+seq)
  var change = $('.bodycon'+seq)
  
  $(btnColor).addClass('textred').removeClass('textbasic')
  $(btnColor).siblings().addClass('textbasic').removeClass('textred')
  
  $(change).css({zIndex:'5'})
  $(change).siblings().css({zIndex:'1'})
  
}



