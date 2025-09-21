// CSS Animations (Progress Bar)
const startWorkoutBtn = document.getElementById("startWorkoutBtn");
const progressBar = document.getElementById("progressBar");

startWorkoutBtn.addEventListener("click", () => {
  progressBar.style.width = "100%"; // animate progress bar to 100%
});

// JavaScript Functions

// Function to calculate calories burned
function calculateCalories(durationMinutes, intensity) {
  // intensity: 1 = low, 2 = medium, 3 = high
  let caloriesPerMinute = 5; // base calories
  return durationMinutes * caloriesPerMinute * intensity;
}

const calcCaloriesBtn = document.getElementById("calcCaloriesBtn");
const caloriesOutput = document.getElementById("caloriesOutput");

calcCaloriesBtn.addEventListener("click", () => {
  const calories = calculateCalories(30, 2); // 30 minutes, medium intensity
  caloriesOutput.textContent = `Calories burned: ${calories}`;
});

// Combined CSS & JS Animations
const runner = document.getElementById("runner");
const runBtn = document.getElementById("runBtn");

runBtn.addEventListener("click", () => {
  runner.classList.remove("run"); // reset animation
  void runner.offsetWidth;        // trigger reflow
  runner.classList.add("run");    // start animation
});
