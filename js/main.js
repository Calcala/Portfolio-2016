// jQuery Variables
var
    $panelContent   = $(".ca-contentGeneral") ,
    $pnlButton      = $(".panelButton"),
    $body           = $('body'),
    $window         = $(window),
    $sectionNav     = $('.sectionNav'),
    $menuItems      = $('.sectionNav a')


//Global variables
var
    menuScrollTop   = Number.MAX_VALUE, // Initialize as MAX value in order to not show the menu when the panel is opening

    currentScrollTop,
    isPanelVisible  = false,
    sectionToNavigate,

    //Next four variables will store the offset top for each section on the web
    offsetAboutMe,
    offsetCareer,
    offsetSkills,
    OffsetWork


generateFlyingWords()

$window.scroll( manageMainMenu )
$menuItems.on("click",navigateToSection)

$(".panelButton").on("click", function(){
    $panelContent.stop().slideToggle(400, function(){

        iniatilizeOffset ()

        $pnlButton.toggleClass("rotated")
        $body.animate({scrollTop: $("#aboutMe").offset().top}, 1000,
                            function(){
                                $sectionNav.stop().fadeIn(600)

                                if($body.scrollTop() == 0){
                                    menuScrollTop = Number.MAX_VALUE
                                    showHideMenu()
                                }else{
                                    menuScrollTop = $body.scrollTop()
                                }
                            })

    })

})


function manageMainMenu () {
    currentScrollTop = $window.scrollTop()
    showHideMenu ()
    highlightCurrentMenuSection ()
}


function showHideMenu (){
    if(currentScrollTop < menuScrollTop || currentScrollTop == 0){
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

function highlightCurrentMenuSection (){
   $menuItems.removeClass("itemSelected")
   if (currentScrollTop >= offsetAboutMe && currentScrollTop < offsetCareer){
       $menuItems.eq(0).addClass("itemSelected")

   }else if (currentScrollTop >= offsetCareer && currentScrollTop < offsetSkills){
       $menuItems.eq(1).addClass("itemSelected")

   }else if (currentScrollTop >= offsetSkills && currentScrollTop < OffsetWork){
       $menuItems.eq(2).addClass("itemSelected")

   }else if (currentScrollTop >= OffsetWork){
       $menuItems.eq(3).addClass("itemSelected")
   }
}

// This function set the values for each section's offset
function iniatilizeOffset (){
    offsetAboutMe   = $("#aboutMe").offset().top
    offsetCareer    = $("#career").offset().top
    offsetSkills    = $("#skills").offset().top
    OffsetWork      = $("#work").offset().top
}


//

function generateFlyingWords () {
    var skillsList = ["HTML5", "CSS3", "SQL Server", "jQuery", "JavaScript", "Android", "Responsive design", "MySQL", "Java"]



}
