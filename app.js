const popUp = document.querySelector('.pop-up-container')
const popUpCloseBtn = document.querySelector('.pop-up-close')
const viewDetails = document.querySelectorAll('.view-details')

// const teamRow = document.querySelectorAll('.team-row')
// const circles = document.querySelectorAll('.circle')

// teamRow.forEach(row => {
//     // const id = Math.floor(Math.random() * 100)
//     row.addEventListener('click', () => {
//         row.classList.add('selected-row')
//             blah();
//         // if(row.classList.contains('selected-row')) {
//         //     const circle = document.querySelectorAll('.circle')
//         //     circle.forEach(circle => {
//         //         circle.classList.add('checked-circle')
//         //         circle.innerHTML = '<i class="fas fa-check"></i>'
//         //     })
//         // }
//     })
// })

// function blah() {
//     circles.forEach(circle => {
//             circle.classList.add('checked-circle')
//             circle.innerHTML = 'X'
//     })
// }

const s1 = document.querySelector('.s-1')
const s2 = document.querySelector('.s-2')
const s3 = document.querySelector('.s-3')
const s4 = document.querySelector('.s-4')
const team1 = document.querySelector('.team-1')
const team2 = document.querySelector('.team-2')
const team3 = document.querySelector('.team-3')
const team4 = document.querySelector('.team-4')
const team5 = document.querySelector('.team-5')
const team6 = document.querySelector('.team-6')
const team7 = document.querySelector('.team-7')
const team8 = document.querySelector('.team-8')
const bracketContent = document.querySelector('.bracket-content')

bracketContent.addEventListener('click', addRow);

function addRow(e) {
    const target = e.target;
    if(e.target !== e.currentTarget) {
        if(target.classList.contains('q-1')) {
            s1.innerHTML = target.innerHTML;
            s1.classList.remove('empty-row')
            quarterFinalOne();
            // const checkedCircle = target.firstElementChild.nextElementSibling;
            // checkedCircle.classList.add('checked-circle')
            // checkedCircle.innerHTML = '<i class="fas fa-check"></i>'
        } 
        else if(target.classList.contains('q-2')) {
            s2.innerHTML = target.innerHTML;
            s2.classList.remove('empty-row')
            quarterFinalTwo()
        }
        else if(target.classList.contains('q-3')) {
            s3.innerHTML = target.innerHTML;
            s3.classList.remove('empty-row')
            quarterFinalThree()
        }
        else if(target.classList.contains('q-4')) {
            s4.innerHTML = target.innerHTML;
            s4.classList.remove('empty-row')
            quarterFinalFour()
        }
    }

    e.stopPropagation()
}

function quarterFinalOne() {

   if(s1.innerHTML === team1.innerHTML) {
       team1.classList.add('selected-row')
       team2.classList.remove('selected-row')
   } 
    else if(s1.innerHTML === team2.innerHTML) {
    team2.classList.add('selected-row')
    team1.classList.remove('selected-row')
   }
}

function quarterFinalTwo() {

   if(s2.innerHTML === team3.innerHTML) {
       team3.classList.add('selected-row')
       team4.classList.remove('selected-row')
   } 
    else if(s2.innerHTML === team4.innerHTML) {
    team4.classList.add('selected-row')
    team3.classList.remove('selected-row')
   }
}

function quarterFinalThree() {

   if(s3.innerHTML === team5.innerHTML) {
       team5.classList.add('selected-row')
       team6.classList.remove('selected-row')
   } 
    else if(s3.innerHTML === team6.innerHTML) {
    team6.classList.add('selected-row')
    team5.classList.remove('selected-row')
   }
}

function quarterFinalFour() {

   if(s4.innerHTML === team7.innerHTML) {
       team7.classList.add('selected-row')
       team8.classList.remove('selected-row')
   } 
    else if(s4.innerHTML === team8.innerHTML) {
    team8.classList.add('selected-row')
    team7.classList.remove('selected-row')
   }
}


// function selectRow() {
//         team1.forEach(team => {
//             if(s1.innerHTML )
//             team1.classList.add('selected-row')
//         })

//     team2.addEventListener('click', () => {
//         team2.classList.add('selected-row')
//         team1.classList.remove('selected-row')
//     })
// }

// selectRow();



viewDetails.forEach(match => {
    match.addEventListener('click', () => {
        popUp.style.display = 'flex';
        popUpCloseBtn.addEventListener('click', () => {
            popUp.style.display = 'none'
        })
    })
})