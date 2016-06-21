// jQuery Variables
var
    $panelContent   = $(".ca-contentGeneral") ,
    $pnlButton      = $(".panelButton"),
    $body           = $('body'),
    $window         = $(window),
    $sectionNav     = $('.sectionNav'),
    $menuIntems     = $('.sectionNav a')


//Global variables
var
    menuScrollTop   = Number.MAX_VALUE, // Initialize as MAX value in order to not show the menu when the panel is opening

    currentScrollTop,
    isPanelVisible  = false,
    sectionToNavigate




console.log(menuScrollTop)

$window.scroll( showHideMenu )
$menuIntems.on("click",navigateToSection)

$(".panelButton").on("click", function(){
    $panelContent.stop().slideToggle(400, function(){
        $pnlButton.toggleClass("rotated")
        $body.animate({scrollTop: $("#aboutMe").offset().top}, 1000,
                            function(){
                                $sectionNav.stop().fadeIn(600)
                                menuScrollTop = $body.scrollTop()
                            })

    })

})

function showHideMenu (){
    currentScrollTop = $window.scrollTop()
    if(currentScrollTop < menuScrollTop){
        $sectionNav.stop().fadeOut(400)
    }else{
         $sectionNav.stop().fadeIn(600)
    }
}

function navigateToSection (event) {
    event.preventDefault()
    sectionToNavigate = $(this).attr("href")
    $body.stop().animate({scrollTop: $(sectionToNavigate).offset().top}, 800)
}
