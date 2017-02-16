var j = jQuery.noConflict();
j(document).ready(function(){

     // hide #back-top first
     j("#back-top").hide();
        
       // fade in #back-top
       j(function () {
           j(window).scroll(function () {
                if (j(this).scrollTop() > 400) {
                  j('#back-top').fadeIn();
             } else {
                 j('#back-top').fadeOut();
             }
           });
    
           // scroll body to 0px on click
           j('#back-top a').click(function () {
               j('body,html').animate({
                  scrollTop: 0
    	            }, 800);
                return false;
    	        });
        });
    	 
        j('.minus').click(function () {
    
            var jinput = j(this).parent().find('input');
    
            var count = parseInt(jinput.val()) - 1;
    
            count = count < 1 ? 1 : count;
    
            jinput.val(count);
    
            jinput.change();
    
            return false;
    
    });
    
    j('.plus').click(function () {
    
            var jinput = j(this).parent().find('input');
    
            jinput.val(parseInt(jinput.val()) + 1);
    
            jinput.change();
    
            return false;
    
    });
    
});
    
