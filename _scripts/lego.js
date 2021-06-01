// Functions for the three buttons on the page.

factorsA = {}
factorsB = {}
svgWidth = 940;
svgHeight = 0;
totalPrimes = 0;
legoWidth = 0;
lcm = 0;
gcm = 0;

colours = {2:'#e6194b', 3:'#3cb44b', 5:'#ffe119', 7:'#4363d8', 11:'#f58231', 13:'#911eb4', 17:'#46f0f0', 19:'#f032e6', 23:'#bcf60c', 29:'#fabebe', 31:'#008080', 37:'#e6beff', 41:'#9a6324', 43:'#fffac8', 47:'#800000', 53:'#aaffc3', 53:'#808000', 59:'#ffd8b1', 61:'#000075'};


function lego_btn(x1, x2) {
    //calculate and fetch the prime factors of x1
    factorsA = prime_factorise(x1);

    //calculate and fetch the prime factors of x2
    factorsB = prime_factorise(x2);


    //Clear past lego
    d3.select("#buildArea").html("");

    // Make a separate function for the previous lego() functionality
    //  and call it here.
    build(factorsA, factorsB, x1, x2);
}

function lego_q1(x1, x2) {
	//calculate and fetch the lowest common factor of x1 and x2
    lcm = math.lcm(x1,x2);
    factorsQ1 = prime_factorise(lcm);

    //Clear past lego
    d3.select("#buildAreaQ1").html("");

    // Make a separate function for the previous lego() functionality
    //  and call it here.
    buildQ1(factorsA, factorsB, x1, x2, factorsQ1);
}

function lego_q2(x1, x2) {
    //calculate and fetch the lowest common factor of x1 and x2
    gcm = math.gcd(x1,x2);
    factorsQ2 = prime_factorise(gcm);

    //Clear past lego
    d3.select("#buildAreaQ2").html("");

    // Make a separate function for the previous lego() functionality
    //  and call it here.
    buildQ2(factorsA, factorsB, x1, x2, factorsQ2);
}