// Scroll to Customizing section

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#st-cus-li").click(function() {
   scrollToAnchor('cus-sec');
});

$("#about-li").click(function() {
   scrollToAnchor('res-sec');
});

$("#cont-li").click(function() {
   scrollToAnchor('con-sec');
});

$("#dest-li").click(function() {
   scrollToAnchor('des-sec');
});

/* Scroll to About section

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#about-li").click(function() {
   scrollToAnchor('res-sec');
});

// Scroll to Contact section

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#cont-li").click(function() {
   scrollToAnchor('con-sec');
});

// Scroll to Destination section

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#dest-li").click(function() {
   scrollToAnchor('des-sec');
});