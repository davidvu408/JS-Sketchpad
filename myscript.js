$(document).ready(function() {	
	constructNewGrid(10,10);
	
});

function newGridButton(){
	var newNumColumns = window.prompt("How many columns of squares on the new grid?");
	var newNumRows = window.prompt("How many rows of squares on the new grid?");
	$("#gridContainer").empty();
	constructNewGrid(newNumColumns, newNumRows);
}
function constructNewGrid(numColumns, numRows){
	for(row = 0; row < numRows; row++){
		for(col = 0; col < numColumns; col++) {
		$("#gridContainer").append("<div class='square'></div>");
		}	
	$("#gridContainer").append("<div class='clear'></div>");
	}
	
	$(".square").mouseover(function() {
		$(this).css("background-color", "blue");
	});
}