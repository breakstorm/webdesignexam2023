
jQuery(document).ready(function() {
  console.log('prac1')
  // navigation
  $('.navi>li')
  .mouseover(function() {
    $(this).find('.submenu').stop().slideDown(500);
  })
  .mouseout(function() {
    $(this).find('.submenu').stop().slideUp(300);
  })

  // auto slider 
  $('.slide>div:gt(0)').hide();
  setInterval(function() {
    $('.slide>div:first-child')
    .fadeOut(1000)
    .next('div')
    .fadeIn(1000)
    .end()
    .appendTo('.slide')
  }, 2000)

  // modal open 
  $('.notice li').click(function() {
    $('#modal').addClass('active')
  })
  // modal close
  $('#modal button').click(function() {
    $('#modal').removeClass('active')
  })
})