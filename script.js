const PasswordBox = document.getElementById("Password");
        const length = 12;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "@#$%^&*()!:;<>?/=+~-_[]";

        function generatePassword() {
            let allChars = lowerCase;

            if (document.getElementById("includeNumbers").checked) {
                allChars += number;
            }

            if (document.getElementById("includeSymbols").checked) {
                allChars += symbol;
            }

            if (document.getElementById("includeUppercase").checked) {
                allChars += upperCase;
            }

            let password = "";

            while (password.length < length) {
                const randomIndex = Math.floor(Math.random() * allChars.length);
                password += allChars[randomIndex];
            }

            PasswordBox.value = password;
         
        }

        function copyPassword() {
            const PasswordBox = document.getElementById("Password");

            if (!PasswordBox.value.trim()) {
                showAlert("Please generate a password first!");
                return;
            }

            // The password text in the input box
            PasswordBox.select();

            try {
                // Execute the copy command
                document.execCommand("copy");
                showAlert("Password copied to clipboard!", true);
            } catch (err) {
                showAlert("Oops, unable to copy the password. Please copy it manually.");
            }

            // Deselect the input box
            PasswordBox.setSelectionRange(0, 0);
        }

        function showAlert(message, isCopyAlert = false) {
            const alertContainer = document.getElementById("alertContainer");
            alertContainer.innerText = message;
            alertContainer.style.display = "block";

            if (isCopyAlert) {
                alertContainer.classList.add("copy-alert");
            } else {
                alertContainer.classList.remove("copy-alert");
            }

            // Hide the alert after 2 seconds
            setTimeout(() => {
                alertContainer.style.display = "none";
            }, 2000);
        }


// card slider

const sliderWrapper = document.getElementById("slider");
const cardWidth = 49; // Each card occupies 20% of the container
let currentPosition = 0;

function prevSlide() {
    currentPosition += cardWidth;
    updateSliderPosition();
}

function nextSlide() {
    currentPosition -= cardWidth;
    updateSliderPosition();
}

function updateSliderPosition() {
    if (currentPosition > 0) {
        currentPosition = -(cardWidth * 5);
    } else if (currentPosition <= -(cardWidth * 5)) {
        currentPosition = 0;
    }

    sliderWrapper.style.transform = `translateX(${currentPosition}%)`;
}