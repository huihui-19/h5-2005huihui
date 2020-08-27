
//手机号验证
$('.next').click(function(){
    var reg = /^1\d{10}/;
    var num = $('.txt1').val();
    if(reg.test(num)){
        $(".p4").css({display:'none'})
    }else{
        $(".p4").css({display:'block'})
    }
    if($(".bx").get(0).checked){
        $(".p3").css({display:'none'})
    }else if(reg.test(num)&&!$(".bx").get(0).checked){
        $(".p3").css({display:'block'})
    }
    if(reg.test(num)&&$(".bx").get(0).checked){
        $('.main').css({display:'none'})
        $('.content').css({display:"block"})
    }
    $('.p5').children().html($('.txt1').val())
})



$('.login').click(function(){
    $.ajax({
        method:'post',
        url:'../../php/logon.php',
        data:{
            username:$('.txt1').val(),
            password:$('.txt2').val()
        },
        success:function(data){

            if(data.code==1){
                location.href="./denglu.html"
            }else{
                alert(data.msg)
            }
        },
        dataType:'json'
    })
})

//验证码
// $('.yzm').click(function(){
//     $('.txt1').val('要啥验证码，直接输密码就完事了')
// })


