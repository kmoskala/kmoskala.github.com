function init(){var n=$(window).height(),i=($(window).width(),$(".headers_container").height());isMobile()?($("#main_banner, #footer").css("height","inherit"),$(".headers_container").css("padding","150px 0")):($("#main_banner, #footer").height(n),$(".headers_container").css("padding",(n-i)/2+"px 0"))}function isMobile(){return $(window).width()<768}$(window).resize(function(){init()}),$(document).ready(function(){init(),$("#main_banner .icon_container").click(function(){$("html, body").animate({scrollTop:$("#main_gallery").offset().top},1500)}),$("#footer .icon_container").click(function(){$("html, body").animate({scrollTop:$("#main_gallery").offset().top},1500)})});