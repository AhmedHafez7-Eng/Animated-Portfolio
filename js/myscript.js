
/*Making Navbar Sticky*/
window.addEventListener('scroll', function () {

    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//----------- Links Add Active Class on click 	(Navbar Section)

$('header ul li a').click(function () {

    $(this).parent().addClass('activeColor').siblings().removeClass('activeColor');
});

/*Trigger Toggle Navbar Menu*/
function togglemenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

//----------- Trigger Read More Button		(About Section)

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//----------- Trigger To Top Button

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 40);
});

// Making Volunteering Timeline

(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item-active",
            img: ".timeline-img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#volunTimeline").timeline();

//-----------	Show Hidden Items and Hide it		(Work Section)
var count_click = 0;
$('.show-more').click(function () {
    count_click++;
    if (count_click % 2 != 0) {	////////////Show Divs
        $(".show-more").html("Show Less");
        $('.projects .projContainer .hidden').fadeIn(1500);
    }
    else {	//////Hide Divs
        $(".show-more").html("Show More");
        $('.projects .projContainer .hidden').fadeOut(1000);
    }
});

// Create Testimonials Swiper.Js Slider

/*<!-- Initialize Swiper -->*/

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

// Trigger Loader
$(window).on('load', function () {
    setTimeout(removeLoader, 2500); //wait for page load PLUS three seconds.
});
function removeLoader() {
    $("#loading").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $("#loading").remove(); //makes page more lightweight
    });
}