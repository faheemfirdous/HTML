$("a").attr("href", "https://www.gmail.com") // changing attributes using jquery


$(".bttn").click(function () {
    $("h1").removeClass("goodTitle");// adding and removing class 
});

$("h1").click(function () {
    $("h1").addClass("goodTitle");
});
$(".orange").click(function () {
    $("h1").css("color", "orange"); // changing css properties  
});


$("input").keypress(function (event) {
    $("h1").text(event.key)
    console.log(event.key)
});

$("h1").on("mouseover", function () {
    $("h1").text("mouse over")
});

$("h1").before("<button>before</button>") // adding html element
$("h1").prepend("<button>prepend</button>")// prepend  adds element just before the  selected element but inside the brackets
$("h1").append("<button>append</button>")// append adds element after the selected element but inside the brackets
$("h1").after("<button>after</button>") // adds element after the element outside the brackets
// . remove method will remove any html element given as argument

// hiding animation

// $("h2").on("click", function () {
//     $("h2").hide();
// });
// // showing animation
// $(".after").on("click", function () {
//     $("h2").show();
// });

// toggle animation
$(".after").on("click", function () {
    $("h2").toggle();
});

// fadeOut , fadeIn, fadeToggle and slideUp, slideDown, slideToggle
// makes a smooth transition 

// .animate helps us to make a custom animation

$("h3").on("mouseover", function () {
    $("h3").animate({opacity: 0.5, margin: "30px"}); // to add percentage,pixel enter that value in string and second value should be a numeric
});

// we can also chain multiple methods 
$("h2").on("mouseover", function () {
    $("h2").fadeOut().fadeIn().animate({opacity: 0.5, margin: "100px"});
})