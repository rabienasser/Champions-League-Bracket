const popUp = document.querySelector('.pop-up-container')
const viewDetails = document.querySelectorAll('.view-details')
const popUpContainer = document.querySelector('.pop-up-container')
const bracketContent = document.querySelector('.bracket-content')
const s1 = document.querySelector('.s-1')
const s2 = document.querySelector('.s-2')
const s3 = document.querySelector('.s-3')
const s4 = document.querySelector('.s-4')
const f1 = document.querySelector('.f-1')
const f2 = document.querySelector('.f-2')

const semi_1 = [];
const semi_2 = [];
const semi_3 = [];
const semi_4 = [];
const final_1 = [];
const final_2 = [];



// ADD SEMI-FINAL TEAMS
function addSemiTeams(quarter, semi, semiArray) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(quarter)) {
                semiArray.push(target)
                semi.innerHTML = target.innerHTML;
                semi.classList.remove('empty-row')
            }
        }

        e.stopPropagation();
    });

}

// ADD FINAL TEAMS
function addFinalTeams(semi, final, finalArray) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(semi)) {
                finalArray.push(target)
                final.innerHTML = target.innerHTML;
                final.classList.remove('empty-row')
            } 

            resetFinalTeams('q-1', final)
            resetFinalTeams('q-2', final)
            resetFinalTeams('q-3', final)
            resetFinalTeams('q-4', final)
        }


        e.stopPropagation();
    });
}


// RESET FINAL TEAMS WHEN SEMI-FINAL TEAM IS CHANGED
function resetFinalTeams(gameBox, final) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target

        if(target !== e.currentTarget) {
            if(!final.classList.contains('empty-row') && target.classList.contains(gameBox) && target.innerHTML !== final.innerHTML) {
                final.innerHTML = `
                <i class="fas fa-shield-alt team-logo shield"></i>
                `;
                final.classList.add('empty-row')
            }
        }
    })
}


// ADD SEMI-FINAL AND FINAL TEAMS TO DOM
function addSemiOne() {
    addSemiTeams('q-1', s1, semi_1)
}
function addSemiTwo() {
    addSemiTeams('q-2', s2, semi_2)
}
function addSemiThree() {
    addSemiTeams('q-3', s3, semi_3)
}
function addSemiFour() {
    addSemiTeams('q-4', s4, semi_4)
}
function addFinalOne() {
    addFinalTeams('s-one', f1, final_1)
}
function addFinalTwo() {
    addFinalTeams('s-two', f2, final_2)
}


// CALL SEMI FINAL AND FINAL FUNCTIONS
function semiCall() {
    addSemiOne();
    addSemiTwo();
    addSemiThree();
    addSemiFour();
}
semiCall();


function finalCall() {
    addFinalOne();
    addFinalTwo();
}
finalCall();


function test() {

}



// Create view details
viewDetails.forEach(match => {
    match.addEventListener('click', createPopUp)
})
    


// CREATE POPUP SCREEN OF MATCH PREVIEW
function createPopUp() {
    fetch("https://api-football-v1.p.rapidapi.com/v3/teams?name=FC%20Porto", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "576022dfeamsh7ad87ea6befc8bep1031c3jsnf1d4181025ac",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const team = data.response[0].team;

        const popUp = document.createElement('div')
        popUp.classList.add('pop-up-overlay')
        popUp.innerHTML =  `
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
                        <img src="${team.logo}" class="team-logo">
                        <p class="team-name">${team.name}</p> 
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
                    <p>2 - 3</p>
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
        popUpContainer.appendChild(popUp)
    })
    .catch(err => {
        console.error(err);
    });
    
    }


    // POP-UP CLOSE BUTTON USING EVENT DELEGATION
    popUp.addEventListener('click', (e) => {
        if(e.target.classList.contains('pop-up-close')) {
            popUp.style.display = 'none'
        }
    })
