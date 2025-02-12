document.addEventListener("DOMContentLoaded", function () {
    // 🕒 Update Date and Time
    function updateTime() {
        const now = new Date();
        document.getElementById("currentDate").innerText = now.toLocaleDateString("ur-PK");
        document.getElementById("currentTime").innerText = now.toLocaleTimeString("ur-PK");
    }
    setInterval(updateTime, 1000); // Update every second
    updateTime(); // Initial call

    // 📝 Verification Form Submission
    document.getElementById("verificationForm")?.addEventListener("submit", function (event) {
        event.preventDefault();
        const idNumber = document.getElementById("idNumber").value;
        const resultElement = document.getElementById("verificationResult");

        if (idNumber === "1234567890") {
            resultElement.innerText = "✅ نمائندہ تصدیق شدہ ہے!";
            resultElement.style.color = "green";
        } else {
            resultElement.innerText = "❌ نمائندہ کا ڈیٹا موجود نہیں!";
            resultElement.style.color = "red";
        }
    });
});
//////hhh
// Function to display current date and time
function updateDateTime() {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');
    const islamicDateElement = document.getElementById('islamicDate'); // New element for Islamic date

    // Get the current date and time
    const now = new Date();

    // Set the time zone to Pakistan Standard Time (PST)
    const options = { timeZone: 'Asia/Karachi', hour12: false };
    
    
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
    document.getElementById("homeButton").addEventListener("click", function() {
        window.location.href = "index.html"; // ہوم پیج کا لنک
    });
    document.getElementById("homeButton").addEventListener("click", function() {
        window.location.href = "index.html"; // ہوم پیج کا لنک
    });
    
}

// Update the time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time
updateDateTime();


