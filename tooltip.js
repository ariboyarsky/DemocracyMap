d3.helper = {};

d3.helper.tooltip = function(access){
	return function(selection){
		var tooltipDiv;
		var bodyNode = s3.select('body').node();
		selection.on("click", function(d, i){
		//remove old tooltip
		d3.select('body').selectAll('div.tooltip').remove();
		//create and append tooltip
		tooltipDiv = d3.
