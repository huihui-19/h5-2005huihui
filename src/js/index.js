

//秒杀倒计时
var shi = document.querySelector('.shi');
var fen = document.querySelector('.fen');
var miao = document.querySelector('.miao');
var times = setInterval(function(){
    var time1 = new Date();
    var time2 = new Date(2020,8,22);
    time1 = time1.getTime();
    time2 = time2.getTime();
    var time = Math.abs(parseInt(time1/1000) - parseInt(time2/1000));
    var day = parseInt(time/60/60/24);
    var hours = parseInt((time-(day*24*60*60))/60/60);
    var minutes = parseInt((time/60)%60);
    var seconds = time%60;
    shi.innerHTML = hours;
    fen.innerHTML = minutes;
    miao.innerHTML = seconds;
},1000);

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    pagination: {
        el: '.swiper-pagination',
    },
  })
  
//返回顶部

$(window).scroll(function(){
    if($(window).scrollTop() >= 400){
        $('.back').fadeIn()
    }else{
        $('.back').fadeOut()
    }   
})
$('.back').click(function(){
    $('html').animate({scrollTop:0},500)
})

//二维码出现
    $('.top-right').children().eq(0).mouseover(function(){
        $('.er').css({display:'block'})
    })
    $('.top-right').children().eq(0).mouseout(function(){
        $('.er').css({display:'none'})
    })

//nav特效

$('.mimi').children().mouseover(function(){
    $('.lei').stop().animate({top:68},300)
    $('.nav').css({backgroundColor:'#fff'})
    $('.look').css({backgroundColor:'#fff'})
})
$('.mimi').mouseout(function(){
    $('.lei').stop().animate({top:-300},300)
    $('.look').css({backgroundColor:'rgb(247,247,247)'})
    $('.nav').css({backgroundColor:'rgb(247,247,247)'})
})

//nav 图片变换
function nav(){
    $('.mimi').children().mouseover(function(){
        $('.youmi').children().eq($(this).index()).stop().animate({
            top: 0,
            opacity: 1,
            zIndex:1
        },300)
    })
    $('.mimi').children().mouseout(function(){
        $('.youmi').children().eq($(this).index()).stop().animate({
            top: -424,
            opacity: 0,
            zIndex:0
        },300)
    })
}
nav();







//
$(".ban2").children().mouseover(function(){
    $('.details').css({display:'block'})
})
$(".ban2").children().mouseout(function(){
    $('.details').css({display:'none'})
})







//抢购滑动

$('.q-right').click(function(){
    $('.uuy').animate({
        left:-1210
    },300)
    $('.cc').css({display:'block'})
    $('.uuy').children().eq(4).prevAll().css({opacity:0})
})
$('.q-left').click(function(){
    $('.uuy').animate({
        left:0
    },300)
    $('.cc').css({display:'none'})
    $('.uuy').children().eq(4).prevAll().css({opacity:1})
})


