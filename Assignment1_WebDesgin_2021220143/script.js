// script.js
document.addEventListener("DOMContentLoaded", function () {
    const imageWrappers = document.querySelectorAll(".image-wrapper");

    imageWrappers.forEach((wrapper) => {
        wrapper.addEventListener("mouseover", function (event) {
            showTooltip(wrapper, event);
        });

        wrapper.addEventListener("mouseout", function () {
            hideTooltip(wrapper);
        });

        wrapper.addEventListener("mousemove", function (event) {
            updateTooltipPosition(wrapper, event);
        });
    });
});

function showTooltip(element, event) {
    const tooltip = element.querySelector('.tooltip');
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
}

function hideTooltip(element) {
    const tooltip = element.querySelector('.tooltip');
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
}

function updateTooltipPosition(element, event) {
    const tooltip = element.querySelector('.tooltip');
    const offsetX = tooltip.offsetWidth / 2;
    const offsetY = tooltip.offsetHeight / 2;

    tooltip.style.left = event.clientX - element.getBoundingClientRect().left - offsetX + 'px';
    tooltip.style.top = event.clientY - element.getBoundingClientRect().top - offsetY + 'px';
}

//-----------------

let submissionCount = 0;

    document.getElementById('submitBtn').addEventListener('click', function (event) {
        event.preventDefault();

        if (validateForm()) {
            submissionCount++;
            showSuccessBox();
            showSubmissionCount();
            showCurrentDateTime();
            showPreviousSubmissions();
        } else {
            alert('Enter All Required Fields (*)');
        }
    });

    function validateForm() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        return firstName !== '' && lastName !== '' && email !== '' && subject !== '' && message !== '';
    }

    function showSubmissionCount() {
        document.getElementById('submissionCount').innerHTML = `<strong>You sent messages ${submissionCount} times:</strong>`;
    }

    function showCurrentDateTime() {
        const currentDate = new Date();
        const formattedDateTime = formatDate(currentDate);

        document.getElementById('currentDateTime').innerHTML = formattedDateTime;
    }

    function showPreviousSubmissions() {
        const previousSubmissionsList = document.getElementById('previousSubmissions');
        const currentDateTime = document.getElementById('currentDateTime').innerHTML;

        if (submissionCount > 1) {
            const previousSubmission = document.createElement('li');
            previousSubmission.innerHTML = `${currentDateTime}`;
            previousSubmissionsList.appendChild(previousSubmission);
        }
    }

    function showSuccessBox() {
        document.getElementById('contactBox').style.display = 'none';
        document.getElementById('successBox').style.display = 'block';
    }

    function formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return `<strong>Current Date and Time:</strong> ${date.toLocaleDateString('en-US', options)}`;
    }

    document.getElementById('sendAnother').addEventListener('click', function (event) {
        event.preventDefault();

        document.getElementById('contactBox').style.display = 'block';
        document.getElementById('successBox').style.display = 'none';
    });
    /* -------------- */
    