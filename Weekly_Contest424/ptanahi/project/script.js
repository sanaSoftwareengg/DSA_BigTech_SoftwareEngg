let nums = [];
const arrayContainer = document.getElementById("array-container");
const simulationLog = document.getElementById("simulation-log");

document.getElementById("start-simulation").addEventListener("click", () => {
    const input = document.getElementById("input-array").value.trim();
    nums = input.split(",").map(Number);

    if (!nums.length || nums.some(isNaN)) {
        alert("Please enter a valid array.");
        return;
    }

    displayArray(nums);
    simulationLog.innerHTML = ""; // Clear previous logs
});

document.getElementById("simulate-selection").addEventListener("click", () => {
   // const startIndex = parseInt(document.getElementById("starting-index").value, 10);
    // const direction = parseInt(document.getElementById("direction").value, 10);

    // if (isNaN(startIndex) || startIndex < 0 || startIndex >= nums.length) {
    //     alert("Please enter a valid starting index.");
    //     return;
    // }

    // simulate(startIndex, direction);

    debugger;
let count=0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          // Simulate both directions for this starting position
          if (simulate(i, -1)) count++; // Left direction
          if (simulate(i, 1)) count++;  // Right direction
      }
  }
  if (count) {debugger;S
    validSelections.push(`Start: ${startIndex}, Direction: ${direction === 1 ? "Right" : "Left"},validSelections:${count}`);
}
});

function displayArray(nums, currentIndex = -1) {
  arrayContainer.innerHTML = "";
  nums.forEach((num, index) => {
      const item = document.createElement("div");
      item.className = `array-item ${num === 0 ? "zero" : ""} ${index === currentIndex ? "current" : ""}`;
      item.textContent = num;
      arrayContainer.appendChild(item);
  });
}

let validSelections = [];

function simulate(startIndex, direction) {debugger;
    simulationLog.innerHTML = "";
    const tempNums = [...nums];
    let curr = startIndex;
    let dir = direction;
    let step = 0;

    function updateArray() {
        displayArray(tempNums, curr);
        logStep(step++, curr, dir, tempNums);

        
        if (curr >= 0 && curr < tempNums.length) {
            if (tempNums[curr] === 0) {
                curr += dir;
            } else if (tempNums[curr] > 0) {
                tempNums[curr] -= 1;
                dir *= -1; // Reverse direction
                curr += dir;
            }

            if (curr >= 0 && curr < tempNums.length || tempNums.some((val) => val > 0)) {
                setTimeout(updateArray, 500);
            } else {
                const isValid = tempNums.every((val) => val === 0);
                if (isValid) {
                    validSelections.push(`Start: ${startIndex}, Direction: ${direction === 1 ? "Right" : "Left"},validSelections:${isValid}`);
                }
                logResult(isValid);
                checkAllSelections();
            }
        }
    }

    updateArray();
}

function checkAllSelections() {
    if (validSelections.length > 0) {
        showPopup(validSelections);
    } else {
        alert("No valid selections found.");
    }
}

function showPopup(validSelections) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = validSelections.map((sel) => `<p>${sel}</p>`).join("");
    modal.style.display = "block";
}

// Close modal
// Function to close the modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Optional: Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
});




function highlightCurrent(index) {
    const items = document.querySelectorAll(".array-item");
    items.forEach((item) => item.classList.remove("current"));
    if (index >= 0 && index < items.length) {
        items[index].classList.add("current");
    }
}
function logStep(step, curr, dir, array) {
  const directionText = dir === 1 ? "Right" : "Left";
  simulationLog.innerHTML += `<p>Step ${step}: Current Index = ${curr}, Direction = ${directionText}, Array = [${array.join(", ")}]</p>`;
}

function logResult(isValid) {
  simulationLog.innerHTML += `<p><strong>Result:</strong> ${isValid ? "Valid Selection 🎉" : "Invalid Selection ❌"}.</p>`;
}
