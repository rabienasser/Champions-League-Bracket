const popUp = document.querySelector('.pop-up-container')
// const popUpCloseBtn = document.querySelector('.pop-up-close')
const viewDetails = document.querySelectorAll('.view-details')


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



function quarterFinalOne(item) {

   if(s1.innerHTML === team1.innerHTML) {
       team1.classList.add('selected-row')
       team2.classList.remove('selected-row')
    //    item.classList.add('checked-circle')
    //    item.innerHTML = '<i class="fas fa-check"></i>'
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



// Create view details
viewDetails.forEach(match => {
    match.addEventListener('click', createPopUp)
})
    


// CREATE POPUP SCREEN OF MATCH PREVIEW
function createPopUp() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'fixtures.json', true)

    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText)
        } 

        const fixture = JSON.parse(this.responseText)
        console.log(fixture.team2)

        const output = `
        <div class="pop-up">
        <button class="pop-up-close">X</button>
        <h3>You picked<br>
        <span class="selected-team">Bayern</span> to beat Paris</h3>
        <div class="match">
            <img src="./images/bayern munich.png" class="team-logo fixture-logo selected-team-logo">
            <p>VS</p>
            <img src="./images/PSG.png" class="team-logo fixture-logo">
        </div>
        <div class="recent-results">
            <p>Recent fixtures</p>
            <div class="fixture">
                <div class="date">WED 7 APR</div>
                <div class="recent-game">
                    <div class="team">
                        <img src="./images/bayern munich.png" class="team-logo">
                        <p class="team-name">Bayern</p> 
                    </div>
                    <p>3 - 2</p>
                    <div class="team">
                        <img src="./images/psg.png" class="team-logo">
                        <p class="team-name">PSG</p> 
                    </div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
            <div class="fixture">
                <div class="date">TUES 13 APR</div>
                <div class="recent-game">
                    <div class="team">
                        <img src="./images/bayern munich.png" class="team-logo">
                        <p class="team-name">Bayern</p> 
                    </div>
                    <p>${fixture.score2}</p>
                    <div class="team">
                        <img src="./images/psg.png" class="team-logo">
                        <p class="team-name">PSG</p> 
                    </div>
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
        </div>
        </div>
        `;
    
        const popUpContainer = document.querySelector('.pop-up-container')
        const popUp = document.createElement('div')
        popUp.classList.add('pop-up-overlay')
        popUp.innerHTML = output
        popUpContainer.appendChild(popUp)
    }

    xhr.send();

    // POP-UP CLOSE BUTTON USING EVENT DELEGATION
    popUp.addEventListener('click', (e) => {
        if(e.target.classList.contains('pop-up-close')) {
            popUp.style.display = 'none'
        }
    })
}



// viewDetails.forEach(match => {
//     match.addEventListener('click', () => {
//         popUp.style.display = 'flex';
//         popUpCloseBtn.addEventListener('click', () => {
//             popUp.style.display = 'none'
//         })
//     })
// })