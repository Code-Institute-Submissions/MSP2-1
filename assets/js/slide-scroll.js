// Scroll to function

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

// Scroll to customizing section, navbar

$("#st-cus-li").click(function() {
   scrollToAnchor('cus-sec');
});

// Scroll to about section, navbar

$("#about-li").click(function() {
   scrollToAnchor('abo-sec');
});

// Scroll to contact section, navbar

$("#cont-li").click(function() {
   scrollToAnchor('con-sec');
});

// Scroll to contact section, about link

$("#cont-link").click(function() {
   scrollToAnchor('con-sec');
});

// Scroll to destinations section, navbar

$("#dest-li").click(function() {
   scrollToAnchor('des-sec');
});

// Scroll to destinations section, from result section

$("#show-res").click(function() {
   scrollToAnchor('des-sec');
});

// Scroll to results section, from customize section

$("#res-rev").click(function() {
   scrollToAnchor('res-sec');
});