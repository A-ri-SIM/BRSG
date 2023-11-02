$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    resizing();
    function resizing(){
        ww=$(window).width();
        wh=$(window).height();
        $("section,.loding").css({
            width:ww,
            height:wh
        })
        if(ww>wh){
            $(".loding_img").css({
                width:ww,
                height:wh
            })
            $(".ctg_wrap").css({
                width:ww,
                height:(ww*0.75)
            })
            $("footer").css({
                width:ww,
                height:(ww*0.17)
            })
        }else{
            $(".loding_img").css({
                width:'auto',
                height:wh
            })
            $(".ctg_wrap").css({
                width:ww,
                height:wh
            })
            $("footer").css({
                width:ww,
                height:(ww*0.3)
            })
        }
       
        
    }
    $(window).resize(function(){
        resizing();
    })
    function loding(){
        $(".loding_move_box").animate({
            left:-ww
        },50000,'linear',function(){
            $(".loding_img").eq(0).appendTo(".loding_move_box");
            $(".loding_move_box").css({
                left:0
            })
        })
    }
    loding();
    setInterval(function(){
        loding();
    },50000)
    setTimeout(function(){
        $(".click_but,.click_img").fadeIn(1000)
    },2000)
    $(".click_but,.click_img").click(function(){
        $(".loding").animate({
            top:-wh
        },1000,function(){
            $(".loding").hide()
        })
    });
    let click_num=0;
            $('.toggle').click(function(){
                $(this).toggleClass('active');
                if(click_num == 0){
                    $(".menu_box").fadeIn();
                    click_num++;
                }else{
                    $(".menu_box").fadeOut();
                    click_num--;
                }
                
            });
    // let box_index=0;
    // let img_box_width=$(".img_box").width();
    // function move_pc(){
    //     img_box_width=$(".img_box").width();
    //     box_index++;
    //     if(box_index>4){
    //         box_index=0
    //     }
    //     $(".main_move_box").animate({
    //         left:-img_box_width
    //     },2000,function(){
    //         $(".but").removeClass("on")
    //         $(".but").eq(box_index).addClass("on")
    //         $(".img_box").eq(0).appendTo(".main_move_box")
    //         $(".main_move_box,.main_move_box_mo").css({
    //             left:0
    //         })
    //     });
    // }
    // function move_mo(){
    //     img_box_width=$(".img_box_mo").width();
    //     box_index++;
    //     if(box_index>4){
    //         box_index=0
    //     }
    //     $(".main_move_box_mo").animate({
    //         left:-img_box_width
    //     },1000,function(){
    //         $(".but").removeClass("on")
    //         $(".but").eq(box_index).addClass("on")
    //         $(".img_box_mo").eq(0).appendTo(".main_move_box_mo")
    //         $(".main_move_box_mo").css({
    //             left:0
    //         })
    //     });
    // }
    // function but_pc(){
    //     $(".but").click(function(){
    //         box_index=$(this).index()
    //         $(".main_move_box").animate({
    //             left:-img_box_width*box_index
    //         },2000,function(){
    //             $(".but").removeClass("on")
    //             $(".but").eq(box_index).addClass("on")
    //         });
    //     })
    // }
    // function but_mo(){
    //     $(".but").click(function(){
    //         box_index=$(this).index()
    //         $(".main_move_box_mo").animate({
    //             left:-img_box_width*box_index
    //         },2000,function(){
    //             $(".but").removeClass("on")
    //             $(".but").eq(box_index).addClass("on")
    //         });
    //     })
    // }
    // let rev_width=$(".rev_img_box").outerWidth(true);
    // function rev_move(){
    //     $(".rev_move_box").animate({
    //         left:-rev_width
    //     },1000,function(){
    //         $(".rev_img_box").eq(0).appendTo(".rev_move_box")
    //         $(".rev_move_box").css({
    //             left:0
    //         })
    //     })
    // }

    
    // if(ww>430){
    //     move_pc();
    //     but_pc()
    //     let move_loop_pc=setInterval(function(){
    //         move_pc();
    //     },12000)
    //     $(".but_box").hover(function(){
    //         clearInterval(move_loop_pc)
    //     },function(){
    //         move_pc();
    //     })
    // }else{
    //     move_mo();
    //     but_mo();
    //     let move_loop_mo=setInterval(function(){
    //         move_mo();
    //     },12000)
    //     $(".but_box").hover(function(){
    //         clearInterval(move_loop_mo)
    //     },function(){
    //         move_mo();
    //     });
        
    //     setInterval(function(){
    //         rev_move();
    //     },3000)
    //     let click_num=0;
    //     $('.toggle').click(function(){
    //         $(this).toggleClass('active');
    //         if(click_num == 0){
    //             $(".menu_box").slideDown(500);
    //             click_num++;
    //         }else{
    //             $(".menu_box").slideUp(500);
    //             click_num--;
    //         }
            
    //     });
    // }




    
    



    let best_width=$(".best_box").outerWidth();
    function best_move(){
        $(".best_move_box").animate({
            left:-best_width
        },3000,function(){
            $(".best_box").eq(0).appendTo(".best_move_box")
            $(".best_move_box").css({
                left:0
            })
        })
    }
    setInterval(function(){
        best_move()
    },3000)
    $(".top_but_wrap").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    })



});//end