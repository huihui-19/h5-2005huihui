// $('.smu').children().mouseover(function(){
//     $('.bigu').children().eq($(this).index()+1).css({opacity:1},{zIndex:1}).siblings().css({opacity:0},{zIndex:0})
// })

//二维码出现
$('.top-right').children().eq(0).mouseover(function(){
    $('.er').css({display:'block'})
})
$('.top-right').children().eq(0).mouseout(function(){
    $('.er').css({display:'none'})
})

//nav特效

$('.nav').children().mouseover(function(){
$('.lei').stop().animate({top:68},300)
$('.nav').css({backgroundColor:'#fff'})
$('.look').css({backgroundColor:'#fff'})
})
$('.nav').mouseout(function(){
$('.lei').stop().animate({top:-300},300)
$('.look').css({backgroundColor:'rgb(247,247,247)'})
$('.nav').css({backgroundColor:'rgb(247,247,247)'})
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

//购物车选择特效

function te(num){
    $(num).children().click(function(){
        $(this).css({borderColor:'red',color:'red'}).siblings().css({borderColor:'#777',color:'#777'})
    })
}
te('.de');
te('.te');

function tu(num){
$(num).children().click(function(){
    $(this).css({borderColor:'red'}).children().css({color:'red'})
    $(this).siblings().css({borderColor:'#777'}).children().css({color:'#777'})
})
}
tu('.io');
tu('.yo');

//数量加减

$('.shu').children().mouseover(function(){
    $(this).css({color:'red'}).siblings().css({color:'#777'})
})
$('.shu').children().mouseout(function(){
    $('.shu').children().css({color:'#777'})
})

$('.shu').children().eq(2).click(function(){
    var i = $('.shu').children().eq(1).text()
    if(i==5){
        var i = $('.shu').children().eq(1).text('5')
    }else{
        i++;
        var i = $('.shu').children().eq(1).text(i)
    }
})

$('.shu').children().eq(0).click(function(){
    var i = $('.shu').children().eq(1).text()
    if(i==1){
        var i = $('.shu').children().eq(1).text('1')
    }else{
        i--;
        var i = $('.shu').children().eq(1).text(i)
    }
})


//获取id里的数据渲染页面

var id = location.href;
id = id.split("?")[1]
id = id.split("=")[1]

//根据id发送ajax请求

    $.ajax({
        url:'../../php/thing.php',
        Type:'GET',
        data:{
            id:id,
        },
        dataType:'json',
        success: function(data){
            $('.one').attr("src",data.product_img)
            $('.name').html(data.product_name)
            $('.price-left').children().children().html(data.product_price)
        }
    })

//把数据存入数据库

$('.cart').click(function(){
    $.ajax({
        url: "../../php/interface/addwq.php",
        dataType:'json',
        data:{
            id:id,
            name:$('.name').html(),
            img:$('.bigu').children().eq(0).children().attr('src'),
            num:$('.shu').children().eq(1).text(),
            price:$('.price-left').children().children().text()
        },
        success:function(res){
            if(res.code==1){
                location.href="./cart.html"
            }else{
                alert('商品加入失败')
            }
        }
    })
})


//图片定位

$(window).scroll(function(){
    if($(window).scrollTop()>180){
        $('.info-left').css({
            position:'fixed',
            top:0
        })
    }else{
        $('.info-left').css({
            position:'relative',
        })
    }
    if($(window).scrollTop()>1200){
        $('.info-left').css({
            position:'relative',
            marginTop: 900 
        })
    }else{
        $('.info-left').css({
            marginTop: 0
        })
    }
})