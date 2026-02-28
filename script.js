
function completeRoza(day, button) {
    alert("Day " + day + " completed! 🌙 Keep shining!");
    
    button.innerHTML = "MashAllah 🌙";
    button.disabled = true;

    // SAVE to localStorage
    localStorage.setItem("roza" + day, "done");
}

// When page loads, check saved data
window.onload = function() {
    for (let i = 1; i <= 30; i++) {
        if (localStorage.getItem("roza" + i) === "done") {
            let buttons = document.querySelectorAll("button");
            buttons[i-1].innerHTML = "MashAllah 🌙";
            buttons[i-1].disabled = true;
        }
    }
}


function completeRoza(day, button) {

    let checkboxes = document.querySelectorAll(".day" + day);
    let allChecked = true;

    checkboxes.forEach(function(box) {
        if (!box.checked) {
            allChecked = false;
        }
    });

    if (allChecked) {
        alert("Day " + day + " completed! 🌙 Keep shining!");
        button.innerHTML = "MashAllah 🌙";
        button.disabled = true;
        localStorage.setItem("roza" + day, "done");
    } else {
        alert("Please complete all tasks before marking as done 😊");
    }
}
// script.js

// Function to save a single day's data
function markDone(day) {
    const dayData = {};

    // Kept Roza checkbox
    const keptRoza = document.getElementById(`day${day}_keptRoza`);
    dayData.keptRoza = keptRoza.checked;

    // Prayers checkboxes
    ['fajar', 'zohar', 'asr', 'maghrib', 'isha'].forEach(prayer => {
        const el = document.getElementById(`day${day}_${prayer}`);
        dayData[prayer] = el.checked;
    });

    // Sparas radio buttons
    ['sparas1', 'sparas2', 'sparas3'].forEach(radio => {
        const el = document.getElementById(`day${day}_${radio}`);
        dayData[radio] = el.checked;
    });

    // Notes text
    const notes = document.getElementById(`day${day}_notes`);
    dayData.notes = notes.value;

    // Save to localStorage
    localStorage.setItem(`day${day}`, JSON.stringify(dayData));

    // Update button state
    const btn = document.getElementById(`day${day}`);
    btn.textContent = 'Completed ✅';
    btn.disabled = true;
}

// Function to load all saved data
function loadData() {
    for (let day = 1; day <= 30; day++) {
        const saved = localStorage.getItem(`day${day}`);
        if (saved) {
            const data = JSON.parse(saved);

            // Kept Roza
            const keptRoza = document.getElementById(`day${day}_keptRoza`);
            if (keptRoza) keptRoza.checked = data.keptRoza;

            // Prayers
            ['fajar', 'zohar', 'asr', 'maghrib', 'isha'].forEach(prayer => {
                const el = document.getElementById(`day${day}_${prayer}`);
                if (el) el.checked = data[prayer];
            });

            // Sparas radios
            ['sparas1', 'sparas2', 'sparas3'].forEach(radio => {
                const el = document.getElementById(`day${day}_${radio}`);
                if (el) el.checked = data[radio];
            });

            // Notes
            const notes = document.getElementById(`day${day}_notes`);
            if (notes) notes.value = data.notes;

            // Button state
            const btn = document.getElementById(`day${day}`);
            if (btn) {
                btn.textContent = 'Completed ✅';
                btn.disabled = true;
            }
        }
    }
}

// Load data when the page opens
window.onload = loadData;

function resetAll() {
    if (confirm("Are you sure you want to reset all data?")) {
        // Clear localStorage for all 30 days
        for (let day = 1; day <= 30; day++) {
            localStorage.removeItem(`day${day}`);

            // Reset checkboxes
            const keptRoza = document.getElementById(`day${day}_keptRoza`);
            if (keptRoza) keptRoza.checked = false;

            ['fajar', 'zohar', 'asr', 'maghrib', 'isha'].forEach(prayer => {
                const el = document.getElementById(`day${day}_${prayer}`);
                if (el) el.checked = false;
            });

            // Reset sparas radios
            ['sparas1', 'sparas2', 'sparas3'].forEach(radio => {
                const el = document.getElementById(`day${day}_${radio}`);
                if (el) el.checked = false;
            });

            // Reset notes
            const notes = document.getElementById(`day${day}_notes`);
            if (notes) notes.value = "";

            // Reset button
            const btn = document.getElementById(`day${day}`);
            if (btn) {
                btn.textContent = "Done";
                btn.disabled = false;
            }
        }
    }
}

function markDone(day) {
    // Kept Roza checkbox
    const keptRoza = document.getElementById(`day${day}_keptRoza`);

    // Sparas radios
    const sparasChecked = ['sparas1', 'sparas2', 'sparas3']
        .some(radio => document.getElementById(`day${day}_${radio}`).checked);

    // Optional: you can add more validation here (like notes or prayers if required)

    if (!keptRoza.checked) {
        alert("Please mark 'Kept Roza' before completing!");
        return;
    }

    if (!sparasChecked) {
        alert("Please select a Sparas option before completing!");
        return;
    }

    // If validation passes, save data (same as before)
    const dayData = {};

    dayData.keptRoza = keptRoza.checked;

    ['fajar', 'zohar', 'asr', 'maghrib', 'isha'].forEach(prayer => {
        const el = document.getElementById(`day${day}_${prayer}`);
        dayData[prayer] = el.checked;
    });

    ['sparas1', 'sparas2', 'sparas3'].forEach(radio => {
        const el = document.getElementById(`day${day}_${radio}`);
        dayData[radio] = el.checked;
    });

    const notes = document.getElementById(`day${day}_notes`);
    dayData.notes = notes.value;

    localStorage.setItem(`day${day}`, JSON.stringify(dayData));

    // Update button
    const btn = document.getElementById(`day${day}`);
    btn.textContent = 'Completed ✅';
    btn.disabled = true;
}
function markDone(day) {
    // Kept Roza checkbox
    const keptRoza = document.getElementById(`day${day}_keptRoza`);

    // Sparas radios
    const sparasChecked = ['sparas1', 'sparas2', 'sparas3']
        .some(radio => document.getElementById(`day${day}_${radio}`).checked);

    // Optional: you can add more validation here (like notes or prayers if required)

    if (!keptRoza.checked) {
        alert("Please mark 'Kept Roza' before completing!");
        return;
    }

    if (!sparasChecked) {
        alert("Please select a Sparas option before completing!");
        return;
    }

    // If validation passes, save data (same as before)
    const dayData = {};

    dayData.keptRoza = keptRoza.checked;

    ['fajar', 'zohar', 'asr', 'maghrib', 'isha'].forEach(prayer => {
        const el = document.getElementById(`day${day}_${prayer}`);
        dayData[prayer] = el.checked;
    });

    ['sparas1', 'sparas2', 'sparas3'].forEach(radio => {
        const el = document.getElementById(`day${day}_${radio}`);
        dayData[radio] = el.checked;
    });

    const notes = document.getElementById(`day${day}_notes`);
    dayData.notes = notes.value;

    localStorage.setItem(`day${day}`, JSON.stringify(dayData));

    // Update button
    const btn = document.getElementById(`day${day}`);
    btn.textContent = 'Completed ✅';
    btn.disabled = true;
}
let totalRozas = 30;

// Load completedRozas from localStorage
let completedRozas = localStorage.getItem("completedRozas");
completedRozas = completedRozas ? parseInt(completedRozas) : 0;

// Show current progress
document.getElementById("totalRozas").innerText = 
    `Rozas completed: ${completedRozas} / ${totalRozas}`;

// Button click adds 1 to completedRozas
document.getElementById("addRozasBtn").onclick = function() {
    if(completedRozas < totalRozas){
        completedRozas++;
        localStorage.setItem("completedRozas", completedRozas);
        document.getElementById("totalRozas").innerText = 
            `Rozas completed: ${completedRozas} / ${totalRozas}`;
    } else {
        alert("🎉 All Rozas completed for this Ramadan!");
    }
}