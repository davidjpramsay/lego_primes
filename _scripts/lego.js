// Global state used across the various build functions.
let factorsA = {};
let factorsB = {};
const svgWidth = 940;
let svgHeight = 0;
let totalPrimes = 0;
let legoWidth = 0;
let lcm = 0;
let gcm = 0;

// Colour map for the first few prime numbers.
const colours = {
    2: "#e6194b",
    3: "#3cb44b",
    5: "#ffe119",
    7: "#4363d8",
    11: "#f58231",
    13: "#911eb4",
    17: "#46f0f0",
    19: "#f032e6",
    23: "#bcf60c",
    29: "#fabebe",
    31: "#008080",
    37: "#e6beff",
    41: "#9a6324",
    43: "#fffac8",
    47: "#800000",
    53: "#aaffc3",
    59: "#ffd8b1",
    61: "#000075",
    67: "#808000"
};


function lego_btn(x1, x2) {
    // Validate and parse the input values.
    const a = parseInt(x1, 10);
    const b = parseInt(x2, 10);
    if (isNaN(a) || isNaN(b) || a < 2 || b < 2 || a > 1000000 || b > 1000000) {
        alert("Please enter integers between 2 and 1,000,000.");
        return;
    }

    // Calculate prime factors for both numbers.
    factorsA = prime_factorise(a);
    factorsB = prime_factorise(b);

    // Clear previous Lego constructions.
    d3.select("#buildArea").html("");

    // Build the two constructions.
    build(factorsA, factorsB, a, b);
}

function lego_q1(x1, x2) {
    // Calculate the lowest common multiple of the two numbers.
    lcm = math.lcm(x1, x2);
    const factorsQ1 = prime_factorise(lcm);

    // Clear previous output and build the LCM construction.
    d3.select("#buildAreaQ1").html("");
    buildQ1(factorsA, factorsB, x1, x2, factorsQ1);
}

function lego_q2(x1, x2) {
    // Calculate the greatest common divisor of the two numbers.
    gcm = math.gcd(x1, x2);
    const factorsQ2 = prime_factorise(gcm);

    // Clear previous output and build the GCD construction.
    d3.select("#buildAreaQ2").html("");
    buildQ2(factorsA, factorsB, x1, x2, factorsQ2);
}

