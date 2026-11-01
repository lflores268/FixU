
const repairInformation = {
    brakes: {
        name: "Brake Pad Replacement",
        explanation: "Brake pads help your car slow down and stop. Over time, they wear out and need to be replaced.",
        parts: 100,
        labor: 150,
        question: "Are my brake rotors still in good condition?"
    },

    battery: {
        name: "Battery Replacement",
        explanation: "The battery provides electricity to start your car. A weak battery can make it difficult to start.",
        parts: 130,
        labor: 40,
        question: "Did you test my battery before recommending a replacement?"
    },

    alternator: {
        name: "Alternator Replacement",
        explanation: "The alternator charges your battery while your engine is running.",
        parts: 250,
        labor: 180,
        question: "Did you test both the alternator and battery?"
    },

    oil: {
        name: "Oil Change",
        explanation: "Engine oil helps keep engine parts lubricated and prevents unnecessary wear.",
        parts: 35,
        labor: 30,
        question: "What type of oil does my car need?"
    },

    ac: {
        name: "AC Compressor Replacement",
        explanation: "The AC compressor helps your car's air conditioning system cool the air.",
        parts: 300,
        labor: 250,
        question: "How did you confirm the compressor needs replacing?"
    }
};

document.getElementById("repairForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the student's vehicle information
    const year = document.getElementById("year").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const repairType = document.getElementById("repair").value;

    // Get the sample repair information
    const repair = repairInformation[repairType];

    // Calculate the sample total
    const totalCost = repair.parts + repair.labor;

    // Display vehicle information
    document.getElementById("vehicleResult").textContent =
        year + " " + make + " " + model;

    // Display repair explanation
    document.getElementById("repairName").textContent =
        repair.name;

    document.getElementById("repairExplanation").textContent =
        repair.explanation;

    // Display sample cost breakdown
   
    document.getElementById("costBreakdown").innerHTML =
        "Sample Parts Cost: <strong>$" + repair.parts.toFixed(2) + "</strong><br>" +
        "Sample Labor Cost: <strong>$" + repair.labor.toFixed(2) + "</strong><br>" +
        "<span class='total-cost'>Sample Total: $" + totalCost.toFixed(2) + "</span>";


    // Display mechanic question
    document.getElementById("mechanicQuestion").textContent =
        repair.question;

    // Show results
    document.getElementById("results").hidden = false;
});

