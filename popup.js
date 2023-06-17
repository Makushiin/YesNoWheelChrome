document.getElementById("spin").addEventListener("click", spinWheel);

function spinWheel() {
  // Disable the button to prevent multiple spins
  document.getElementById("spin").disabled = true;

  // Clear the result text
  var resultText = document.getElementById("result");
  resultText.textContent = "";

  // Reset the wheel's transformation to the initial state
  var wheel = document.getElementById("wheel");
  wheel.style.transition = "none";
  wheel.style.transform = "none";

  // Trigger a reflow before applying the spinning animation
  wheel.offsetWidth;

  // Get a random number of full rotations
  var fullRotations = Math.floor(Math.random() * 4) + 5; // Random number between 5 and 8 full rotations

  // Calculate the angle for full rotations
  var fullRotationAngle = fullRotations * 360;

  // Get a random degree for the final spin
  var randomDegree = Math.floor(Math.random() * 360);

  // Calculate the total degree for spinning
  var totalDegree = fullRotationAngle + randomDegree;

  // Apply the spinning animation to the wheel
  wheel.style.transition = "transform 3s ease";
  wheel.style.transform = "rotate(" + totalDegree + "deg)";

  // Wait for the spinning animation to finish
  setTimeout(function() {
    // Calculate the result based on the final wheel position
    var result = calculateResult(totalDegree);

    // Update the result text
    resultText.textContent = result;

    // Re-enable the button after the spin
    document.getElementById("spin").disabled = false;
  }, 3000);
}

function calculateResult(totalDegree) {
  // Get the number of segments in the wheel
  var segments = 8;

  // Calculate the angle per segment
  var anglePerSegment = 360 / segments;

  // Calculate the index of the segment pointing upwards
  var segmentIndex = Math.floor(totalDegree / anglePerSegment) % segments;

  // Assign results to each segment (modify as needed)
  var results = ["NO", "YES", "NO", "YES", "NO", "YES", "NO", "YES"];

  // Retrieve the result based on the segment index
  var result = results[segmentIndex];

  return result;
}
