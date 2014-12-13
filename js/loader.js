$(document).ready(function(){

var bList = {};
var bTable = "";
	$.ajax({
  url: "http://seeward.com/books_app.php",
  cache: true,
 dataType : "json",
}).done(function( html ) {
	$("#loader").hide();

renderTable(html);
    
});

renderTable = function(data){
	bTable = "<tr><th>Title</th><th>Author</th><th>Date</th></tr>"
	$.each(data, function(i,obj){
		bTable = bTable + "<tr><td>"+obj.NAME+"</td><td>"+obj.AUTHOR+"</td><td>"+obj.DATE+"</td></tr>";
	});

	$("#bookTable").html(bTable);
};
	


$("#bookTable").searcher({
    inputSelector: "#searchTerm"
    // itemSelector (tbody > tr) and textSelector (td) already have proper default values
});















})