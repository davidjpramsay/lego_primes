function buildQ1(factorsA, factorsB, x1, x2, factorsQ1) {

// create SVG element:
svg = d3.select("#buildAreaQ1").append("svg").attr("width", svgWidth + "px").attr("height", svgHeight + "px");


// Lego Q1 builder function
	var i=0;
	for (var primeN in factorsQ1) {
		var j=0;
		while (j < factorsQ1[primeN]) {
			svg.append('rect')
				.attr('x', i*legoWidth+((svgWidth)-legoWidth*(Object.keys(factorsQ1).length))/2)
				.attr('y', svgHeight-((j+2)*legoWidth))
				.attr('width', legoWidth)
				.attr('height', legoWidth)
				.attr('stroke', 'black')
				.attr('fill', colours[primeN] || "#808080");
			svg.append("text")
			    .attr("x", i*legoWidth+((svgWidth)-legoWidth*(Object.keys(factorsQ1).length))/2+legoWidth/2)
			    .attr("y", svgHeight-((j+2)*legoWidth)+legoWidth/2)
			    .attr("text-anchor", "middle")
			    .attr("dy", ".35em")
    			.text(primeN);   
			j++;
		};
		i++;
	}



svg.append("text")
    .attr("x", svgWidth/2)
    .attr("y", svgHeight-(legoWidth)+legoWidth/2)
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("font-weight",900)
	.text(lcm);


// Show Da Dom
d3.select("#buildAreaQ1").style("display", "block");
d3.select("#buildAreaQ1").style("height", svgHeight + "px");
}