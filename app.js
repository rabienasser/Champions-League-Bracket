const popUp = document.querySelector('.pop-up-container')
const popUpCloseBtn = document.querySelector('.pop-up-close')
const viewDetails = document.querySelectorAll('.view-details')

const circle = document.querySelectorAll('.circle')
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

const q1 = document.querySelectorAll('.q-1')
const s1 = document.querySelector('.s-1')
const s2 = document.querySelector('.s-2')
const team1 = document.querySelector('.team-1')
const team2 = document.querySelector('.team-2')

q1.forEach(team => {
    team.addEventListener('click', () => {
        s1.innerHTML = team.innerHTML;
        s1.classList.remove('empty-row')
     })
})

function selectRow() {
    team1.addEventListener('click', () => {
        team1.classList.add('selected-row')
        team2.classList.remove('selected-row')
    })
    team2.addEventListener('click', () => {
        team2.classList.add('selected-row')
        team1.classList.remove('selected-row')
    })
}

selectRow();

viewDetails.forEach(match => {
    match.addEventListener('click', () => {
        popUp.style.display = 'flex';
        popUpCloseBtn.addEventListener('click', () => {
            popUp.style.display = 'none'
        })
    })
})