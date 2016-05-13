var 
    $panelAbout = $(".aboutPanel") ,
    $pnlButton  = $(".panelButton"),
    $body       = $('body')


$(".panelButton").on("click", function(){
    $panelAbout.stop().slideToggle(400, function(){
        $pnlButton.toggleClass("rotated")
        $body.animate({scrollTop: $("#aboutMe").offset().top}, 1000)
    })
    
    
})