
(function ($) {
    $(function () {

        
        $.scrollify({
            section: ".blank-item",
                scrollSpeed: 1100,
                setHeights: true,
                updateHash: true
            
        })
        
        
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".main-nav-wrap").fadeToggle()
        });

        if ($("select.selectric-select").length) {
            $("select.selectric-select").selectric({
            });
        }

        
        if($('.anim-wrapper').length){
            
            var item1 = $('.anim-item-one')
            var animTrigger1 = $('.blank-item').eq(0)
            var animTrigger2 = $('.blank-item').eq(1)
            var animTrigger3 = $('.blank-item').eq(2)
            var animTrigger4 = $('.blank-item').eq(3)
            var animTrigger5 = $('.blank-item').eq(4)
            
            
//            var HeroAnim = $('.hero-wrap')
            var animItemOne = $('.anim-item-one')
            var animItemTwo = $('.anim-item-two')
            var animItemThree = $('.anim-item-three')
            var animItemFour = $('.anim-item-four')
            
            var heroNext = $('.welfare-animation-section')
            
            var tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: animTrigger1,
                    start: "0%",
                    end: "100%",
                    scrub: true,

                }
            });
            
            tl1.fromTo(heroNext, {
                    duration: 2,
                    opacity: 0,
                    yPercent: 110,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 1,
                    yPercent: 0,
                    ease: "none",
                },
                "<"
            )
            
            tl1.fromTo(".hero-bg", {
                    duration: 2,
                    opacity: 1,
                    yPercent: 0,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 0,
                    yPercent: -110,
                    ease: "none",
                },
                "<"
            )
            tl1.fromTo(".hero-bottom-wrap", {
                    duration: 2,
                    opacity: 1,
                    yPercent: 0,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 0,
                    yPercent: -150,
                    ease: "none",
                },
                "<"
            )
            
            var tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: animTrigger2,
                    start: "0%",
                    end: "100%",
                    scrub: true,

                }
            });
            
            
            var tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: animTrigger3,
                    start: "0%",
                    end: "100%",
                    scrub: true,

                }
            });
            var tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: animTrigger4,
                    start: "0%",
                    end: "100%",
                    scrub: true,

                }
            });
            
            
            tl1.fromTo(animItemOne, {
                    duration: 2,
                    opacity: 0,
                    zIndex: 9,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 1,
                    zIndex: 9,
                    yPercent: 0,
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(animItemTwo, {
                    duration: 2,
                    opacity: 0,
                    zIndex: 0,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 1,
                    zIndex: 9,
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(animItemThree, {
                    duration: 2,
                    opacity: 0,
                    zIndex: 0,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 1,
                    zIndex: 9,
                    yPercent: 0,
                    ease: "none",
                },
                "<"
            )
            tl4.fromTo(animItemFour, {
                    duration: 2,
                    opacity: 0,
                    zIndex: 0,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 1,
                    zIndex: 9,
                    yPercent: 0,
                    ease: "none",
                },
                "<"
            )
            
            
            
            
            tl2.fromTo('.shape-one', {
                    duration: 2,
                    width: "49.75%",
                    height: "52.5%",
                    left: "46.8%",
                    top: "46%",
                    ease: "none",
                }, {
                    duration: 2,
                    width: "50.25%",
                    height: "55.742%",
                    left: "37.6%",
                    top: "48.4%",
                    ease: "none",
                },
                "<"
            )
            


            tl2.fromTo('.shape-two', {
                    duration: 2,
                    width: "50.25%",
                    height: "71.852%",
                    top: "48.5%",
                    left: "56.57%",
                    ease: "none",
                }, {
                    duration: 2,
                    width: "44%",
                    height: "75.926%",
                    top: "50.6%",
                    left: "47.3%",
                    ease: "none",
                },
                "<"
            )
            
            
            
            
            tl2.fromTo('.shape-three', {
                    duration: 2,
                    width: "49.75%",
                    height: "60.556%",
                    top: "46.65%",
                    transform: "translate(0%, -50%)",
                    right: "0",
                    ease: "none",
                }, {
                    duration: 2,
                    width: "59.125%",
                    height: "37.038%",
                    top: "58.65%",
                    transform: "translate(0%, -50%)",
                    right: "3.2%",
                    ease: "none",
                },
                "<"
            )
            
            


            
            tl2.fromTo('.shape-four', {
                    duration: 2,
                    width: "50%",
                    height: "31.575%",
                    top: "56.5%",
                    left: "0",
                    transform: "translate(0%, -50%)",
                    ease: "none",
                }, {
                    duration: 2,
                    width: "100%",
                    height: "24.26%",
                    top: "60.3%",
                    left: "0",
                    transform: "translate(0%, -50%)",
                    ease: "none",
                },
                "<"
            )
            
            


            
            tl3.to('.shape-one', {
                    duration: 2,
                    top: "60.9%",
                    left: "23.3%",
                    height: "35.649%",
                    width: "34%",
                    ease: "none",
                },
                "<"
            )

            tl3.to('.shape-two', {
                    duration: 2,
                    left: "48.4%",
                    top: "72.9%",
                    height: "35.557%",
                    width: "46.625%",
                    ease: "none",
                },
                "<"
            )

            
            tl3.to('.shape-three', {
                    duration: 2,
                    transform: "translate(0%, -50%)",
                    right: "0%",
                    top: "74.65%",
                    height: "16.112%",
                    width: "100%",
                    ease: "none",
                },
                "<"
            )
            
            tl3.to('.shape-four', {
                    duration: 2,
                    transform: "translate(0%, -50%)",
                    left: "28.3%",
                    top: "64.9%",
                    height: "35.556%",
                    width: "56%",
                    ease: "none",
                },
                "<"
            )
            
         
            
            tl4.to('.shape-one', {
                    duration: 2,
                    top: "44.2%",
                    left: "47.2%",
                    height: "40.371%",
                    width: "44%",
                    ease: "none",
                },
                "<"
            )

            
            
            tl4.to('.shape-two', {
                    duration: 2,
                    left: "61%",
                    top: "72.5%",
                    height: "16.112%",
                    width: "78%",
                    ease: "none",
                },
                "<"
            )

            
            
            
            
            
            
            tl4.to('.shape-three', {
                    duration: 2,
                    transform: "translate(0%, -50%)",
                    right: "39%",
                    top: "72.6%",
                    height: "8.149%",
                    width: "60.875%",
                    ease: "none",
                },
                "<"
            )
            
            
            tl4.to('.shape-four', {
                    duration: 2,
                    transform: "translate(0%, -50%)",
                    left: "31%",
                    top: "72.9%",
                    height: "31.482%",
                    width: "47.063%",
                    ease: "none",
                },
                "<"
            )
            
            
            
            
            
function calcTransform(property, value) {
  let alias = { y: "translateY", x: "translateX", z: "translateZ", rotation: "rotate" };
  return function (i, target) {
    let transform = target.style.transform; // remember the original transform
    target.style.transform = (alias[property] || property) + "(" + value + ")"; // apply the new value
    let computed = parseFloat(gsap.getProperty(target, property, property.substr(0, 3) === "rot" ? "deg" : "px", true)); // grab the pixel value
    target.style.transform = transform; // revert
    gsap.getProperty(target, property, "px", true); // reset the cache so the new value is reflected
    return computed; 
  };
}

            
            var $100 = calcTransform("y", "calc(100% + 8px)");
            var $_100 = calcTransform("y", "calc(-100% - 8px)");

            
            tl2.to('.experts-item-one', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-60.5% + 8px)"),
                    y: $100,
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-two', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-158.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-three', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-158.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-four', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(144% + 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-five', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(41.5% + 8px)"),
                    y: $100,
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-six', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-56% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-seven', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-56% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl2.to('.experts-item-eight', {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(41.5% + 8px)"),
                    ease: "none",
                },
                "<"
            ) 
            
            // anim 2
            var item2 = $('.anim-item-two')
            var managing1 = $('.welfare-managing-component').eq(0)
            var managing2 = $('.welfare-managing-component').eq(1)
            var managing3 = $('.welfare-managing-component').eq(2)
            var managing4 = $('.welfare-managing-component').eq(3)
            var managing5 = $('.welfare-managing-component').eq(4)
            var managing6 = $('.welfare-managing-component').eq(5)
            var managing7 = $('.welfare-managing-component').eq(6)
            var managing8 = $('.welfare-managing-component').eq(7)

            tl1.fromTo('.welfare-managing-component, .welfare-defined-content-component, .welfare-defined .welfare-experts-component', {
                    duration: 2,
                    opacity: 1,
                    ease: "none",
                }, {
                    duration: 2,
                    opacity: 0,
                    ease: "none",
                },
                "<"
            )
            
            tl2.fromTo(managing3, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(60.5% - 8px)"),
                    y: $_100,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo('.welfare-managing-component', {
                    duration: 2,
                    opacity: 0,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing1, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(158.5% + 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing2, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(158.5% + 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing6, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-41.5% - 8px)"),
                    y: $_100,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing4, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(56% + 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing5, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(56% + 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl2.fromTo(managing7, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-41.5% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            
            
            
        
                     
            // anim 2
            var item3 = $('.anim-item-three')
            var defined1 = $('.welfare-defined-content-component').eq(0)
            var defined2 = $('.welfare-defined-content-component').eq(1)
            var defined3 = $('.welfare-defined-content-component').eq(2)
            var defined4 = $('.welfare-defined-one')
            var defined5 = $('.welfare-defined-two')
            var defined6 = $('.welfare-defined-three')
            var defined7 = $('.welfare-defined-four')
//            tl1.fromTo(item2, {
//                    duration: 2,
//                    zIndex: 0,
//                    ease: "none",
//                },{
//                    duration: 2,
//                    zIndex: 1,
//                    ease: "none",
//                },
//                "<"
//            )
            
            tl3.fromTo(defined1, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(90% - 8px)"),
                    y: calcTransform("y", "calc(125% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(defined2, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-12% - 8px)"),
                    y: calcTransform("y", "calc(219.5% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(defined3, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-119% + 8px)"),
                    y: calcTransform("y", "calc(24% + 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            
            
            
            

            tl3.fromTo(defined4, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(2% - 8px)"),
                    y: calcTransform("y", "calc(-131.5% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(defined6, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(2% - 8px)"),
                    y: calcTransform("y", "calc(77.5% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(defined7, {
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-100.5% - 8px)"),
                    y: calcTransform("y", "calc(-131.5% - 8px)"),
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },
                "<"
            ) 
            
            tl3.fromTo(managing2, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(120.5% - 8px)"),
                    y: calcTransform("y", "calc(-27.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            
            tl3.fromTo(managing5, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-100% - 8px)"),
                    y: "0",
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(managing4, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(-85% - 8px)"),
                    y: calcTransform("y", "calc(-130.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            tl3.fromTo(managing6, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(17.5% - 8px)"),
                    y: calcTransform("y", "calc(-235.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
//            tl2.fromTo(defined3, {
//                    duration: 2,
//                    opacity: 1,
//                    x: calcTransform("x", "calc(-119% + 8px)"),
//                    y: calcTransform("y", "calc(24% + 8px)"),
//                    ease: "none",
//                },{
//                    duration: 2,
//                    opacity: 1,
//                    x: "0",
//                    y: "0",
//                    ease: "none",
//                },
//                "<"
//            )

            tl2.fromTo(".welfare-managing-text-wrap", {
                    duration: 2,
                    opacity: 0,
                    yPercent: 120,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    yPercent: 0,
                    ease: "none",
                },
                "<"
            )
            
            tl3.fromTo(".welfare-managing-text-wrap", {
                    duration: 2,
                    opacity: 1,
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    scale: 0.8,
                    xPercent: 21,
                    yPercent: 90,
                    ease: "none",
                },
                "<"
            )

            tl3.fromTo(managing1, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(2% - 8px)"),
                    y: calcTransform("y", "calc(131.5% + 8px)"),
                    ease: "none",
                },
                "<"
            )

            
            tl3.fromTo(managing3, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(104.5% - 8px)"),
                    y: calcTransform("y", "calc(138.5% - 8px)"),
                    ease: "none",
                },
                "<"
            )
            
            tl3.fromTo(managing7, {
                    duration: 2,
                    opacity: 1,
                    x: "0",
                    y: "0",
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    x: calcTransform("x", "calc(2.5% - 8px)"),
                    y: calcTransform("y", "calc(-69% - 8px)"),
                    ease: "none",
                },
                "<"
            ) 
            
            //anim-3
            
            var located1 = $('.welfare-located-component').eq(0)
            var located2 = $('.welfare-located-component').eq(1)
            var located3 = $('.welfare-located-component').eq(2)
            var located4 = $('.welfare-located-component').eq(3)
            
            tl4.fromTo(located1, {
                    duration: 2,
                    opacity: 0,
                    xPercent: -0.5,
                    yPercent: 18,
                    scaleX: 1.4115,
                    scaleY: 0.54687,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },
                "<"
            )
            tl4.fromTo(located2, {
                    duration: 2,
                    opacity: 0,
                    xPercent: 41.5,
                    yPercent: 61,
                    scaleX: 1.4115,
                    scaleY: 0.44492,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },
                "<"
            )
            
            
            
            
            tl4.fromTo(located3, {
                    duration: 2,
                    opacity: 0,
                    xPercent: 83,
                    yPercent: 12.5,
                    scaleX: 1.4115,
                    scaleY: 0.38,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },
                "<"
            ) 
            
            
            tl4.fromTo(located4, {
                    duration: 2,
                    opacity: 0,
                    xPercent: -140.5,
                    yPercent: -62,
                    scaleX: 1.4115,
                    scaleY: 0.5,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },
                "<"
            ) 
         
            
            tl4.fromTo(defined4, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: 0,
                    yPercent: -33.5,
                    scaleX: 0.7064,
                    scaleY: 1.82855,
                    ease: "none",
                },
                "<"
            ) 
            
            tl4.fromTo(defined6, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: -58.5,
                    yPercent: -33.5,
                    scaleX: 0.7064,
                    scaleY: 2.6619,
                    ease: "none",
                },
                "<"
            )
            
            tl4.fromTo(defined7, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    scaleX: 1,
                    scaleY: 1,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: -29,
                    yPercent: -136.5,
                    scaleX: 0.7064,
                    scaleY: 2.2476,
                    ease: "none",
                },
                "<"
            )
            tl4.fromTo(defined2, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    yPercent: 0,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: 110,
                    yPercent: 60,
                    ease: "none",
                },
                "<"
            ) 
            tl4.fromTo(defined1, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: 204,
                    ease: "none",
                },
                "<"
            ) 
            tl4.fromTo(defined3, {
                    duration: 2,
                    opacity: 1,
                    xPercent: 0,
                    ease: "none",
                },{
                    duration: 2,
                    opacity: 0,
                    xPercent: 0,
                    ease: "none",
                },
                "<"
            ) 
         
            
        }
        
        
        
        

        if ($('.welfare-experts-component-wrap').length) {
            
            $('.welfare-experts-component-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: false,
                arrows: true,
                prevArrow: '.welfare-experts-left-arrow',
                nextArrow: '.welfare-experts-right-arrow',
                responsive: [
                    {
                        breakpoint: 800,
                        settings: 'unslick'
                    }
                ]
            })
            $(window).on('resize', function () {
                $('.welfare-experts-component-wrap').slick('resize');
            });
        }

        if ($('.welfare-managing-component-wrap').length) {
            
            $('.welfare-managing-component-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                dots: false,
                arrows: true,
                prevArrow: '.welfare-managing-left-arrow',
                nextArrow: '.welfare-managing-right-arrow',
                responsive: [
                    {
                        breakpoint: 800,
                        settings: 'unslick'
                    }
                ]
            })
            $(window).on('resize', function () {
                $('.welfare-managing-component-wrap').slick('resize');
            });
        }


    }) // End ready function.




})(jQuery)
