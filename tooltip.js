d3.helper = {};

d3.helper.tooltip = function(access){
	return function(selection){
		var tooltipDiv;
		var bodyNode = s3.select('body').node();
		selection.on("click", function(d, i) {
            //remove old tooltip
            d3.select('body').selectAll('div.tooltip').remove();
            //create and append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');

            var mousePosition = d3.mouse(bodyNode);
            tooltipDiv.style('left', (mousePosition[1] - 15)+'px')
                .style('top', (mousePosition[1] -15)+'px')
                .style('position', 'absolute')
                .style('z-index', 1001);

            //add text
            var tooltipText = access(d, i) || '';
            tooltipDiv.html(tooltipText);
        })
            .on("click", function(d, i){
                tooltipDiv.remove();
            });
    };
};

