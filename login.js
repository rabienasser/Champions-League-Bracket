// GENERATE UEFA LOG-IN SCREEN
function UEFALogIn() {
    const loginOverlay = document.querySelector('.log-in-overlay')
    const closeBtn = document.querySelector('.close-log-in')

    loginOverlay.style.opacity = 1
    loginOverlay.style.zIndex = 3

    closeBtn.addEventListener('click', () => {
        loginOverlay.style.opacity = 0
        loginOverlay.style.zIndex = 1
    })

    submitLogIn();
    createAcct(loginOverlay);
}



// GENERATE UEFA CREATE-ACCOUNT SCREEN
function createAcct(loginOverlay) {
    const createAcctOverlay = document.querySelector('.create-account-overlay')
    const createAcctBtn = document.querySelector('.create-account-btn')
    const closeBtn = document.querySelector('.close-create-acct')

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

    inputHover();
}



// HOVER OVER QUESTION ON INPUTS ON CREATE-ACCOUNT SCREEN
function inputHover() {
    const icon1 = document.querySelector('.q-hover-1')
    const icon2 = document.querySelector('.q-hover-2')
    const icon3 = document.querySelector('.q-hover-3')
    const msg1 = document.querySelector('.hover-msg-1')
    const msg2 = document.querySelector('.hover-msg-2')
    const msg3 = document.querySelector('.hover-msg-3')

    icon1.addEventListener('mouseover', () => {
        msg1.style.opacity = 1;
    })
}



// SUBMIT EMAIL AND PASSWORD ON LOGIN
function submitLogIn() {
    const submitBtn = document.querySelector('.submit-btn')
    const invalidMsg = document.querySelector('.invalid-msg')
    const loader = document.querySelector('.loader')
    const form = document.querySelector('.log-in-form')
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')

    // LOAD & PREVENT DEFAULT ON SUBMIT BUTTON
    submitBtn.addEventListener('click', (e) => {
        loader.style.display = 'block'
        invalidMsg.style.display = 'none'

        setTimeout(function() {
            invalidMsg.style.display = 'flex'
            loader.style.display = 'none'
        }, 1000)

        email.value = ''
        password.value = ''

        e.preventDefault()
    })

    // LOAD & PREVENT DEFAULT ON ENTER KEY
    form.addEventListener('keypress', (e) => {
        if(e.keyCode == 13 || e.which == 13) {

            loader.style.display = 'block'
            invalidMsg.style.display = 'none'
    
            setTimeout(function() {
                invalidMsg.style.display = 'flex'
                loader.style.display = 'none'
            }, 1000)
            
            email.value = ''
            password.value = ''

            e.preventDefault()
        }

    })
}



// // CREATE EMAIL
// function createEmail() {
//     re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
//     const error = document.querySelector('.email-error')

//     if(!re.test(email.value)) {
//         email.classList.add('invalid')
//         error.style.display = 'flex'
//     } else {
//         email.classList.add('valid')
//         error.style.display = 'none'
//     }
// }



// // CREATE PASSWORD
// function createPassword() {
//     re = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\W]{8,15}$/;
//     const error = document.querySelector('.password-error')

//     if(password.value.length < 8) {
//        password.classList.add('invalid')
//        error.textContent = 'password must be at least 8 characters'
//        error.style.display = 'flex'
//     } else if(password.value.length > 15) {
//         password.classList.add('invalid')
//         error.textContent = 'Password must not exceed 15 characters'
//         error.style.display = 'flex'
//     } else if(password.value.length >= 8 && password.value.length <= 15){
//         if(!re.test(password.value)) {
//             password.classList.add('invalid')
//             error.textContent = 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'
//             error.style.display = 'flex'
//         } else {
//             password.classList.add('valid')
//             error.style.display = 'none'
//         }
//     }
// }


// PULL LOGIN SCREEN WHEN LOGIN BTN IS PRESSED
loginBtn.addEventListener('click', UEFALogIn)