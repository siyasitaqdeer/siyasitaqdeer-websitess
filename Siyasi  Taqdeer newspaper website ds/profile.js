document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const idNumber = urlParams.get('id');

    if (!idNumber) {
        alert("شناختی نمبر فراہم نہیں کیا گیا!");
        return;
    }

    fetch(`https://script.google.com/macros/s/AKfycby70ScGdUe7D1vSRf-x1aq7RJYlptNIQDPSav1pfaDToAOXhY2HV9WQK8akXJIeRZzr/exec?id=${idNumber}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("name").innerText = data.name;
                document.getElementById("fatherName").innerText = data.fatherName;
                document.getElementById("cnic").innerText = data.cnic;
                document.getElementById("phone").innerText = data.phone;
                document.getElementById("designation").innerText = data.designation;
                document.getElementById("profileImage").src = data.profileImage; // Image URL from Google Sheet
                document.getElementById("certificateLink").href = data.certificate;
            } else {
                alert("❌ کوئی ریکارڈ نہیں ملا!");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("⚠ کچھ غلط ہو گیا، دوبارہ کوشش کریں!");
        });
});
// Function to display current date and time
function updateDateTime() {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');
    const islamicDateElement = document.getElementById('islamicDate'); // New element for Islamic date

    // Get the current date and time
    const now = new Date();

    // Set the time zone to Pakistan Standard Time (PST)
    const options = { timeZone: 'Asia/Karachi', hour12: false };
    
    // Date format (example: 11 February 2025) for Pakistani date
    const date = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Karachi'
    });

    // Time format (example: 14:30:00) in PST
    const time = now.toLocaleTimeString('en-GB', options);

    // Display the date and time
    currentDateElement.textContent = date;
    currentTimeElement.textContent = time;

    // Fetch the Islamic Date (Hijri) using the `Intl.DateTimeFormat` API
    const islamicDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);

    // Display the Islamic Date in Arabic
    islamicDateElement.textContent = islamicDate;
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time
updateDateTime();


