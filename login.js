const createAcctOverlay = document.querySelector('.create-account-overlay')
const createAcctBtn = document.querySelector('.create-account-btn')
const closeBtn = document.querySelector('.close-create-acct')
const alreadyHaveAcctBtn = document.querySelector('.already-have-acct-btn')
const createAcctForm = document.querySelector('.create-acct-form')


// GENERATE UEFA LOG-IN SCREEN
function UEFALogIn() {
    const loginOverlay = document.querySelector('.log-in-overlay')
    const closeBtn = document.querySelector('.close-log-in')

    loginOverlay.style.opacity = 1
    loginOverlay.style.zIndex = 3
    createAcctOverlay.style.opacity = 0
    createAcctOverlay.style.zIndex = 1

    closeBtn.addEventListener('click', () => {
        loginOverlay.style.opacity = 0
        loginOverlay.style.zIndex = 1
    })

    submitLogIn();
    createAcct(loginOverlay);
}



// SUBMIT EMAIL AND PASSWORD ON LOGIN SCREEN
function submitLogIn() {
    const submitBtn = document.querySelector('.submit-btn')
    const invalidMsg = document.querySelector('.invalid-msg')
    const loader = document.querySelector('.loader')
    const form = document.querySelector('.log-in-form')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')

    // LOAD & PREVENT DEFAULT ON SUBMIT BUTTON
    form.addEventListener('submit', (e) => {
        loader.style.display = 'block'
        invalidMsg.style.display = 'none'

        setTimeout(function() {
            invalidMsg.style.display = 'flex'   //BE SURE TO SET INTERVAL ON THIS ERROR MSG
            loader.style.display = 'none'
        }, 1000)

        email.value = ''
        password.value = ''

        e.preventDefault()
    })
}



// GENERATE UEFA CREATE-ACCOUNT SCREEN
function createAcct(loginOverlay) {
    createAcctBtn.addEventListener('click', () => {
        loginOverlay.style.opacity = 0
        loginOverlay.style.zIndex = 1
        createAcctOverlay.style.opacity = 1
        createAcctOverlay.style.zIndex = 3
    })

    closeBtn.addEventListener('click', () => {
        createAcctOverlay.style.opacity = 0
        createAcctOverlay.style.zIndex = 1
    })

    iconHover();
}



// HOVER OVER QUESTION ON INPUTS ON CREATE-ACCOUNT SCREEN
function iconHover() {
    const msg1 = document.querySelector('.hover-msg-1')
    const msg2 = document.querySelector('.hover-msg-2')
    const msg3 = document.querySelector('.hover-msg-3')
    const icon = document.querySelectorAll('.fa-question-circle')

    icon.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            if(icon.classList.contains('q-hover-1')) msg1.style.opacity = 1
            else if(icon.classList.contains('q-hover-2')) msg2.style.opacity = 1
            else if(icon.classList.contains('q-hover-3')) msg3.style.opacity = 1
        })
        icon.addEventListener('mouseout', () => {
            if(icon.classList.contains('q-hover-1')) msg1.style.opacity = 0
            else if(icon.classList.contains('q-hover-2')) {msg2.style.opacity = 0}
            else if(icon.classList.contains('q-hover-3')) msg3.style.opacity = 0
        })
    })
}



// CREATE EMAIL
function createEmail() {
    re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    const email = document.querySelector('.create-acct-email')
    const error = document.querySelector('.email-error')
    const success = document.querySelector('.input-check-1')

    if(!re.test(email.value)) {
        error.style.display = 'flex'
        success.style.display = 'none'
    } else if(re.test(email.value)){
        error.style.display = 'none'
        success.style.display = 'flex'
    }
}



// // CREATE PASSWORD
function createPassword() {
    re = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\W]{8,15}$/;
    const password = document.querySelector('.create-acct-password')
    const error = document.querySelector('.password-error')
    const success = document.querySelector('.input-check-2')

    if(password.value.length < 8) {
       error.textContent = 'password must be at least 8 characters'
       error.style.display = 'flex'
    } else if(password.value.length > 15) {
        error.textContent = 'Password must not exceed 15 characters'
        error.style.display = 'flex'
    } else if(password.value.length >= 8 && password.value.length <= 15){
        if(!re.test(password.value)) {
            error.textContent = 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'
            error.style.display = 'flex'
        } else {
            error.style.display = 'none'
            success.style.display = 'flex'
        }
    }
}



// EVENT LISTENERS
// PULL LOGIN SCREEN WHEN LOGIN BTN IS PRESSED
loginBtn.addEventListener('click', UEFALogIn)

alreadyHaveAcctBtn.addEventListener('click', UEFALogIn)

createAcctForm.addEventListener('submit', (e) => {
    createEmail();
    createPassword();
    e.preventDefault();
})
