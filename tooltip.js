d3.helper = {};

d3.helper.tooltip = function(accessor){
	return function(selection){
		var tooltipDiv;
		var bodyNode = d3.select('body').node();
		selection.on("mouseover", function(d, i) {
            //remove old tooltip
            d3.select('body').selectAll('div.tooltip').remove();
            //create and append tooltip
            tooltipDiv = d3.select('body').append('div').attr('class', 'tooltip');

            var mousePosition = d3.mouse(bodyNode);
            tooltipDiv.style('left', (mousePosition[0] + 10)+'px')
                .style('top', (mousePosition[1] -15)+'px')
                .style('position', 'absolute')
                .style('z-index', 1001);
            //add text
            var tooltipText = accessor(d, i) || '';
            //tooltipDiv.html(tooltipText);
        })
            .on('mousemove', function(d, i){
                var mousePosition = d3.mouse(bodyNode);
                tooltipDiv.style('left', (mousePosition[0]+10)+'px')
                    .style('top', (mousePosition[1]-15)+'px');
                var tooltipText = accessor(d, i) || '';
                tooltipDiv.html(tooltipText);
            })
            .on("mouseout", function(d, i){
                tooltipDiv.remove();
            });
    };
};

