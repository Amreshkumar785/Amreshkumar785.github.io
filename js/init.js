jQuery(document).ready(function(e){setTimeout(function(){e("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"90px"})},100),e(".smoothscroll").on("click",function(a){a.preventDefault();var t=this.hash,n=e(t);e("html, body").stop().animate({scrollTop:n.offset().top},800,"swing",function(){window.location.hash=t})});var a=e("section"),t=e("#nav-wrap a");a.waypoint({handler:function(a,n){var o;o=e(this),"up"===n&&(o=o.prev());var i=e('#nav-wrap a[href="#'+o.attr("id")+'"]');t.parent().removeClass("current"),i.parent().addClass("current")},offset:"35%"}),e("header").css({height:e(window).height()}),e(window).on("resize",function(){e("header").css({height:e(window).height()}),e("body").css({width:e(window).width()})}),e(window).on("scroll",function(){var a=e("header").height(),t=e(window).scrollTop(),n=e("#nav-wrap");t>.2*a&&t<a&&e(window).outerWidth()>768?n.fadeOut("fast"):t<.2*a?n.removeClass("opaque").fadeIn("fast"):n.addClass("opaque").fadeIn("fast")}),e(".item-wrap a").magnificPopup({type:"inline",fixedContentPos:!1,removalDelay:200,showCloseBtn:!1,mainClass:"mfp-fade"}),e(document).on("click",".popup-modal-dismiss",function(a){a.preventDefault(),e.magnificPopup.close()}),e(".flexslider").flexslider({namespace:"flex-",controlsContainer:".flex-container",animation:"slide",controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:600,randomize:!1})});