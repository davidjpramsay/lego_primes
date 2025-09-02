/**
 * Build visual representations of the prime factors for two numbers.
 * factorsA, factorsB are objects mapping primes to counts.
 * x1 and x2 are the original numbers used for labelling.
 */
function build(factorsA, factorsB, x1, x2) {
    // Calculate block width based on number of unique primes.
    totalPrimes = 2 * Math.max(
        Object.keys(factorsA).length,
        Object.keys(factorsB).length
    );
    legoWidth = Math.floor(svgWidth / (totalPrimes + 4));

    // Determine SVG height based on the largest exponent.
    let maxFrequency = 1;
    for (const f of [factorsA, factorsB]) {
        for (const prime in f) {
            if (f[prime] > maxFrequency) {
                maxFrequency = f[prime];
            }
        }
    }
    svgHeight = (maxFrequency + 2) * legoWidth;
    if (svgHeight > 500) {
        legoWidth = Math.floor(500 / (maxFrequency + 2));
        svgHeight = 500;
    }

    // Hide question areas while building main display.
    d3.select("#buildAreaQ1").style("display", "none");
    d3.select("#buildAreaQ2").style("display", "none");

    // Create SVG canvas.
    const svg = d3
        .select("#buildArea")
        .append("svg")
        .attr("width", svgWidth + "px")
        .attr("height", svgHeight + "px");

    // Helper to render a set of prime factors.
    function renderFactors(factors, offsetX) {
        let i = 0;
        for (const prime in factors) {
            let j = 0;
            while (j < factors[prime]) {
                svg.append("rect")
                    .attr("x", i * legoWidth + offsetX)
                    .attr("y", svgHeight - (j + 2) * legoWidth)
                    .attr("width", legoWidth)
                    .attr("height", legoWidth)
                    .attr("stroke", "black")
                    .attr("fill", colours[prime] || "#808080");
                svg.append("text")
                    .attr("x", i * legoWidth + offsetX + legoWidth / 2)
                    .attr("y", svgHeight - (j + 2) * legoWidth + legoWidth / 2)
                    .attr("text-anchor", "middle")
                    .attr("dy", ".35em")
                    .text(prime);
                j++;
            }
            i++;
        }
    }

    const offsetA =
        ((svgWidth / 2) - legoWidth * Object.keys(factorsA).length) / 2;
    const offsetB =
        svgWidth / 2 +
        ((svgWidth / 2) - legoWidth * Object.keys(factorsB).length) / 2;

    renderFactors(factorsA, offsetA);
    renderFactors(factorsB, offsetB);

    // Add labels for each original number.
    svg.append("text")
        .attr("x", svgWidth / 4)
        .attr("y", svgHeight - legoWidth + legoWidth / 2)
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("font-weight", 900)
        .text(x1);
    svg.append("text")
        .attr("x", (3 * svgWidth) / 4)
        .attr("y", svgHeight - legoWidth + legoWidth / 2)
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .attr("font-weight", 900)
        .text(x2);

    // Show the built construction and reveal questions.
    d3.select("#buildArea")
        .style("display", "block")
        .style("height", svgHeight + "px");
    d3.select("#questions").style("display", "block");
}

