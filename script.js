// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("✅ Message Sent Successfully!");

    form.reset();

});