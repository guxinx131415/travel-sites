$(function () {
    $('.header').fullpage({
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5',],
        menu: '#menu',
        onLeave: function(index,nextIndex,rir){
            $('[amt]').each(function(index,element){
                var amt = $(element).attr('amt');
                $(element).removeClass(amt);
            });
            $('.header .section').eq(nextIndex - 1)
            .find('[amt]').each(function(i,elem){
                $(elem).addClass($(elem).attr('amt'));
            });
        },
        // 菜单颜色切换待升级冗余代码过
        afterLoad: function(anchorLink, index){ 
            var xc= $(this);
           if(index == 5){
            $(".list-btn").hide();
            $("#menu").removeClass("open"); 
            $(".nav-bg").css("opacity","1"); 
            $(".Login a:nth-child(2)").css("color","#333");
            $(".Login") .css("visibility","visible");
            $(".logo").addClass("login1");
           } else if (index < 5 ) {
            $(".list-btn").fadeIn();
            $("#menu").removeClass("open");  
            $(".nav-bg").css("opacity","1");
            $(".logo").addClass("login1");
            $(".Login a:nth-child(2)").css("color","#333");
            $(".Login") .css("visibility","visible");
           } if (index == 1) {
            $("#menu").addClass("open"); 
            $(".nav-bg").css("opacity","0");
            $(".Login") .css("visibility","hidden");  
            $(".logo").removeClass("login1");
           } if (index ==3){
            $(".model-bg").animate({width:"50%",opacity:'.9'},1000);  
           } 
        }
    });
    //第三张轮播思路
        $('#one').click(function(){
            $('.model-slide-box').stop().animate({left:'0%'},1100);
            $('.m-title span').text('成本解决');
            $('.m-title img').attr('src', './img/model-box/solution-big-1.png');
            $('.m-box-body .content-right').text('协助企业制定与经营目标匹配的差旅预算，通过大数据管理来降低支出，并利用合理性审查降低费用');
             $('.m-box-body.active .content-right').text('定制简要透明的差旅费政策，有选择性进行集中采购、提前采购、择优采购，降低单次采购成本，并利用金融服务降低资金成本');
             $('.m-title').css("visibility","hidden").removeClass('animated fadeInDown');
             setTimeout(function(){
             $('.m-title').css("visibility","visible").addClass('animated fadeInDown');
             },700);
             $('.m-box-body').css("visibility","hidden").removeClass('animated fadeInLeft');
             setTimeout(function(){
             $('.m-box-body').css("visibility","visible").addClass('animated fadeInLeft');
             },700);
             $('.m-box-body.active').css("visibility","hidden").removeClass('animated fadeInRight');
             setTimeout(function(){
             $('.m-box-body.active').css("visibility","visible").addClass('animated fadeInRight');
             },700);
       });
        $('#two').click(function(){
             $('.model-slide-box').stop().animate({left:'-100%'},1100);
             $('.m-title span').text('服务解决');
             $('.m-box-body .content-right').text('支持线上、app、电话、邮件等多种形式咨询及定制企业专属差旅，并自动生成企业差旅数据分析、差旅管理报告');
             $('.m-box-body.active .content-right').text('适应不同类型企业或机构，根据不同人员的出行需求提供个性化服务');
             $('.m-title img').attr('src', './img/model-box/solution-big-2.png');
             $('.m-title').css("visibility","hidden").removeClass('animated fadeInDown');
             setTimeout(function(){
             $('.m-title').css("visibility","visible").addClass('animated fadeInDown');
             },700);
             $('.m-box-body').css("visibility","hidden").removeClass('animated fadeInLeft');
             setTimeout(function(){
             $('.m-box-body').css("visibility","visible").addClass('animated fadeInLeft');
             },700);
             $('.m-box-body.active').css("visibility","hidden").removeClass('animated fadeInRight');
             setTimeout(function(){
             $('.m-box-body.active').css("visibility","visible").addClass('animated fadeInRight');
             },700);
        });
        $('#last').click(function(){
            $('.model-slide-box').stop().animate({left:'-200%'},1100);
            $('.m-title span').text('效率解决');
            $('.m-title img').attr('src', './img/model-box/solution-big-3.png');
            $('.m-box-body .content-right').text('提供垫资月结方案，无缝对接企业财务、报销流程；每月只需一张发票即可报销当月所有差旅费用，让差旅更便捷、清晰');
            $('.m-box-body.active .content-right').text('通过减少人工审核来提高效率，最大程度地优化差旅审核流程');
            $('.m-title').css("visibility","hidden").removeClass('animated fadeInDown');
             setTimeout(function(){
             $('.m-title').css("visibility","visible").addClass('animated fadeInDown');
             },800);
             $('.m-box-body').css("visibility","hidden").removeClass('animated fadeInLeft');
             setTimeout(function(){
             $('.m-box-body').css("visibility","visible").addClass('animated fadeInLeft');
             },700);
             $('.m-box-body.active').css("visibility","hidden").removeClass('animated fadeInRight');
             setTimeout(function(){
             $('.m-box-body.active').css("visibility","visible").addClass('animated fadeInRight');
             },700);
       });
       $('.m-b-btn div').click(function(){
          $('.m-b-btn div').eq($(this).index()).addClass("toggle-box active").siblings().removeClass("active");
       })
    //第三张轮播切换
    //中间小按钮下一张  
    $('.list-btn').click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    //轮播四张竖立页面
    //下一张图片
    $(".Clike-right").click(function(){
        $(".ads-body").animate({marginLeft:"-1200px"});
   });
   //上一张图片
   $(".Clike-left").click(function(){
    $(".ads-body").animate({marginLeft:"0px"});
   });
   //打开登录模块
   $("#onpen-login").click(function(){
       $('.login-bg').fadeIn();
       $('.login-box').fadeIn();
   });
   $(".login-close").click(function(){
    $('.login-bg').fadeOut();
    $('.login-box').fadeOut();
   });
   //账号input内容
   $("#user").bind("input propertychange",function(){
       var jqthis = $(this);
       if ($(".user-close").css("visibility")=="hidden") { 
           $(".user-close").css("visibility","visible");
       }
       else if(jqthis.val() == ""){
        $(".user-close").css("visibility","hidden" )
       }
  });
  //密码input内容
  $("#pwd").bind("input propertychange",function(){
    var jqthis = $(this);
    if ($(".pwd-close").css("visibility")=="hidden") { 
        $(".pwd-close").css("visibility","visible");
    }
    else if(jqthis.val() == ""){
     $(".pwd-close").css("visibility","hidden" )
    }
});
//都是用最蠢的办法实现
//让账号input-x消失
  $(".user-close").click(function(){
      if($("#user").val("")){
        $(".user-close").css("visibility","hidden")
      }
  });
  //让密码input-x消失
  $(".pwd-close").click(function(){
    if($("#pwd").val("")){
      $(".pwd-close").css("visibility","hidden")
    }
});
//   $(".login-border input").blur(function(){
//     $(".pwd-close").show();
//   });
});  