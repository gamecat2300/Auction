/* Page Link Vars */
$('a').click(function(){
	var title = $(this).attr("title");
    console.log(title);
    s.tl(this,'o',title);	
});