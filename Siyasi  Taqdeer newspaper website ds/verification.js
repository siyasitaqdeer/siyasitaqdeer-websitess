document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("verificationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let idNumber = document.getElementById("idNumber").value.trim();

        if (idNumber === "") {
            alert("برائے مہربانی شناختی نمبر درج کریں!");
            return;
        }

        // پروفائل صفحے پر شناختی نمبر کے ساتھ ری ڈائریکٹ کریں
        window.location.href = `profile.html?id=${idNumber}`;
    });
});
//hamburger toggle
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

