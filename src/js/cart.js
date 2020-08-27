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





//查询并显示购物车
function showcart(){
    $.ajax({
        
        url:"../../php/interface/showlist.php",
        dataType:'json',
        success:function(res){
            if(res.data){
                $('t-box').css({display:'none'})  
              }
           $.each(res.data,function(index,item){
                $('.lip').append(`
                <tr>
                <td class="t1"><input type="checkbox"></td>
                <td class="t2"><img src="${item.product_img}" alt="${item.product_id}"></td>
                <td class="t3">${item.product_name}</td>
                <td class="t4">${item.product_price}</td>
                <td>
                    <div class="shu">
                        <span class="jian">-</span>
                        <span>${item.product_num}</span>
                        <span class="jia">+</span>
                    </div>
                </td>
                <td>0.00</td>
                <td>0.00</td>
                <td style="color: red;">${item.product_price*item.product_num}.00</td>
                <td class="lastt"><a href="#">删除</a><br></td>
                </tr>
                `);if(item.product_price){
                    $('.t-box').css({display:'none'});
                    $('.buy-box').css({display:'block'})
                }
           })
        }
    })
}
showcart();

//删除购物车

$('.lip').on('click','.lastt',function(){
    var id = $(this).parent().children().eq(1).children().attr('alt')
    $.ajax({
        url:"../../php/interface/delwq.php",
        data:{
            id:id
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                window.location.reload()
            }
        }
    })
})

//增加商品

$('.lip').on('click','.jia',function(){
    var id = $(this).parent().parent().parent().children().eq(1).children().attr('alt')
    $.ajax({
        url:"../../php/interface/updatewq.php",
        data:{
            type:'add',
            id:id
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                var num = $('.shu').children().eq(1).html()
                num++
                window.location.reload()
            }
        }
    })
})

//减少商品

$('.lip').on('click','.jian',function(){
    var id = $(this).parent().parent().parent().children().eq(1).children().attr('alt')
    $.ajax({
        url:"../../php/interface/updatewq.php",
        data:{
            type:'jian',
            id:id
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                var num = $('.shu').children().eq(1).html()
                num--
                window.location.reload()
            }
        }
    })
})

//无商品显示

    


    

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

//
$(".ban2").children().mouseover(function(){
    $('.details').css({display:'block'})
})
$(".ban2").children().mouseout(function(){
    $('.details').css({display:'none'})
})

