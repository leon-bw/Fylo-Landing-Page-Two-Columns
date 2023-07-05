const DesktopCurve  = document.querySelector('.curve_dt');
const mobCurve  = document.querySelector('.curve_mob');
const email = document.querySelector('.email');
const email2 = document.querySelector('.email2');
const signUp = document.querySelector('.signup');
const getStarted = document.querySelector('.get_started');

// Replace curve image for desktop and mobile
function widthCheck() {
        const browserWidth = window.innerWidth;
        if (browserWidth < 769) {
            DesktopCurve.classList.add('hidden');
            mobCurve.classList.remove('hidden');
        } else if (browserWidth >= 770){
            DesktopCurve.classList.remove('hidden');
            mobCurve.classList.add('hidden');
        }
    };
    window.addEventListener('resize', (e) => {
        widthCheck();
    });
widthCheck();

// Validate Email Address
function validEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

// Show Sign Up Error
function signupError(input,message) {
    email.className = 'email input_error';
    const errorMessage = document.querySelector('#signup_error');
    errorMessage.className = 'error_message';
    errorMessage.innerHTML = message;
}

// Show get started Error
function getStartedError(input,message) {
    email2.className = 'email2 input_error';
    const errorMessage2 = document.querySelector('#getstarted_error');
    errorMessage2.classList.remove('hidden');
    errorMessage2.innerHTML = message;
}

// Show Success
function success() {
    email.className = 'email';
    email2.className = 'email2';
    const errorMessage = document.querySelector('#signup_error');
    const errorMessage2 = document.querySelector('#getstarted_error');
    errorMessage.classList.add('hidden');
    errorMessage2.classList.add('hidden');
}

// Event listener for forms
signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validEmail(email.value)) {
        signupError(email,'Please check your email');
    } else {
        success();
    }
});

getStarted.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validEmail(email2.value)) {
        getStartedError(email2,'Please check your email');
    } else {
        success();
    }
});
