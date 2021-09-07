(function($){
$(document).ready(function(){
var maxHeight = 0, container_maxHeight = 0,
example_content = $("#service-content"),
example_div = example_content.children("div");
example_div.each(function() {
var $section = $(this);
if($section.height() > maxHeight) {
maxHeight = $section.height();
container_maxHeight = $section.outerHeight(true);
}
});
example_div.height(maxHeight);
$("#service-content").height(container_maxHeight);
var $tabs = $('#service-links a');
$tabs.bind('click mouseover', function(e){
var index = $tabs.removeClass("active").index(this);
$(this).addClass("active");
example_content.stop().animate({"marginTop" : -index*container_maxHeight + "px"});
e.preventDefault();
});
});
})(jQuery);// JavaScript Document