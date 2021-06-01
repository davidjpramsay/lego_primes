function build(factorsA, factorsB, x1, x2) {
//  Calculations to set Lego Size based on number of blocks
//  The plus 4 in "var legoWidth = Math.floor(svgWidth/(totalPrimes+4));" is for 1 block on left 2 mid and 1 right
totalPrimes = 2*Math.max(Object.keys(factorsA).length, Object.keys(factorsB).length);
legoWidth = Math.floor(svgWidth/(totalPrimes+4));

// Set Height
// Find tallest Tower
var maxFrequencyA = 1
for (var x in factorsA) {
    if (factorsA[x] > maxFrequencyA) {
        maxFrequencyA = factorsA[x];
    };
};
var maxFrequencyB = 1
for (var x in factorsB) {
    if (factorsB[x] > maxFrequencyB) {
        maxFrequencyB = factorsB[x];
    };
};
var maxFrequency = Math.max(maxFrequencyA, maxFrequencyB);
svgHeight = (maxFrequency+2)*legoWidth;

if (svgHeight > 500) {
	legoWidth = Math.floor(500/(maxFrequency+2));
	svgHeight = 500;
};



//Hide Question 1 and 2
d3.select("#buildAreaQ1").style("display", "none");
d3.select("#buildAreaQ2").style("display", "none");

// create SVG element:
var svg = d3.select("#buildArea").append("svg").attr("width", svgWidth + "px").attr("height", svgHeight + "px");


// Lego 1 builder function
	var i=0;
	for (var primeN in factorsA) {
		var j=0;
		while (j < factorsA[primeN]) {
			svg.append('rect')
				.attr('x', i*legoWidth+((svgWidth/2)-legoWidth*(Object.keys(factorsA).length))/2)
				.attr('y', svgHeight-((j+2)*legoWidth))
				.attr('width', legoWidth)
				.attr('height', legoWidth)
				.attr('stroke', 'black')
				.attr('fill', colours[primeN] || "#808080");
			svg.append("text")
			    .attr("x", i*legoWidth+((svgWidth/2)-legoWidth*(Object.keys(factorsA).length))/2+legoWidth/2)
			    .attr("y", svgHeight-((j+2)*legoWidth)+legoWidth/2)
			    .attr("text-anchor", "middle")
			    .attr("dy", ".35em")
    			.text(primeN);   
			j++;
		};
		i++;
	}

// Lego 2 builder function
var i=0;
for (var primeN in factorsB) {
	var j=0;
	while (j < factorsB[primeN]) {
		svg.append('rect')
			.attr('x', i*legoWidth+svgWidth/2+((svgWidth/2)-legoWidth*(Object.keys(factorsB).length))/2)
			.attr('y', svgHeight-((j+2)*legoWidth))
			.attr('width', legoWidth)
			.attr('height', legoWidth)
			.attr('stroke', 'black')
			.attr('fill', colours[primeN] || "#808080");
		svg.append("text")
		    .attr("x", i*legoWidth+svgWidth/2+((svgWidth/2)-legoWidth*(Object.keys(factorsB).length))/2+legoWidth/2)
		    .attr("y", svgHeight-((j+2)*legoWidth)+legoWidth/2)
		    .attr("text-anchor", "middle")
		    .attr("dy", ".35em")
			.text(primeN);
		j++;
	};
	i++;
	}

svg.append("text")
    .attr("x", svgWidth/4)
    .attr("y", svgHeight-(legoWidth)+legoWidth/2)
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("font-weight",900)
	.text(x1);
svg.append("text")
    .attr("x", 3*svgWidth/4)
    .attr("y", svgHeight-(legoWidth)+legoWidth/2)
    .attr("text-anchor", "middle")
    .attr("dy", ".35em")
    .attr("font-weight",900)
	.text(x2);

// Show Da Dom
d3.select("#buildArea").style("display", "block");
d3.select("#buildArea").style("height", svgHeight + "px");
d3.select("#questions").style("display", "block");
}