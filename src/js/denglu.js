//验证手机

$('.deng').click(function(){
    var reg = /^1\d{10}/;
    var num = $('.txt1').val();
    if(reg.test(num)){
        $("p").eq(1).css({display:'none'})
    }else{
        $("p").eq(1).css({display:'block'})
    }
    if($('.txt2').val()){
        $("p").eq(2).css({display:'none'})
    }else if(reg.test(num)&&!($('.txt2').val())){
        $("p").eq(2).css({display:'block'})
    }
})

//登陆
$('.deng').click(function(){
    $.ajax({
        method:'post',
        url:'../../php/denglu.php',
        data:{
            username:$('.txt1').val(),
            password:$('.txt2').val()
        },
        success:function(data){
            if(data.code==1){
                location.href="./cart.html"
            }else{
                $("p").eq(3).css({display:'block'})
            }
        },
        dataType:'json'
    })
})
