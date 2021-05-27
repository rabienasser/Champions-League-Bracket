const popUp = document.querySelector('.pop-up-container')
const popUpContainer = document.querySelector('.pop-up-container')
const bracketContent = document.querySelector('.bracket-content')
const winnerPopUp = document.querySelector('.bracket-complete')
const loginBtn = document.querySelector('.log-in-btn')
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
function addSemiTeams(quarter, semi, semiArray, topTeam, bottomTeam) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(quarter)) {
                // if(target.classList.contains(topTeam)) {
                //     target.classList.add('selected-row')
                //     target.nextElementSibling.classList.remove('selected-row')

                //     // ADD CIRCLE CLASS
                //     target.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
                //     target.firstElementChild.nextElementSibling.classList.add('checked-circle')
                //     target.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
                //     target.nextElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')

                // } else if(target.classList.contains(bottomTeam)) {
                //     target.classList.add('selected-row')
                //     target.previousElementSibling.classList.remove('selected-row')

                //     // ADD CIRCLE CLASS
                //     target.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
                //     target.firstElementChild.nextElementSibling.classList.add('checked-circle')
                //     target.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
                //     target.previousElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                // }
                designSelectedTeams(quarter, semi, topTeam, bottomTeam, target)
                semiArray.push(target)
                semi.innerHTML = target.innerHTML;
                semi.firstElementChild.nextElementSibling.innerHTML = ''
                semi.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                semi.classList.remove('empty-row')
                quarterFinalStageCheck()
            }
        }
    });
}



// ADD FINAL TEAMS
function addFinalTeams(semi, final, finalArray, topTeam, bottomTeam) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(semi) && !target.classList.contains('empty-row')) {
                designSelectedTeams(semi, final, topTeam, bottomTeam, target)
                finalArray.push(target)
                final.innerHTML = target.innerHTML;
                final.firstElementChild.nextElementSibling.innerHTML = ''
                final.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                final.classList.remove('empty-row', 'selected-row')
                semiFinalStageCheck();
            } 

            resetFinalTeams('q-1', final, s1, s2)
            resetFinalTeams('q-2', final, s1, s2)
            resetFinalTeams('q-3', final, s3, s4)
            resetFinalTeams('q-4', final, s3, s4)
        }
    });
}



// CHOOSE TOURNAMENT WINNER
function selectWinner(final, topTeam, bottomTeam) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(final) && !target.classList.contains('empty-row')) {
                designSelectedTeams(undefined, undefined, topTeam, bottomTeam, target)
                finalStageCheck();
                createWinnerPopUp();
            } 
        }
    });
}
selectWinner('final', 'f-1', 'f-2')



// ADD EFFECTS ON SELECTED TEAMS
function designSelectedTeams(firstStage, secondStage, topTeam, bottomTeam, target) {
    if(target.classList.contains(topTeam)) {
        target.classList.add('selected-row')
        target.nextElementSibling.classList.remove('selected-row')

        // ADD CIRCLE CLASS
        target.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
        target.firstElementChild.nextElementSibling.classList.add('checked-circle')
        target.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
        target.nextElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')

    } else if(target.classList.contains(bottomTeam)) {
        target.classList.add('selected-row')
        target.previousElementSibling.classList.remove('selected-row')

        // ADD CIRCLE CLASS
        target.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
        target.firstElementChild.nextElementSibling.classList.add('checked-circle')
        target.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
        target.previousElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')
    }
}



// ADD CHECKMARKS WHEN TOURNAMENT STAGES ARE COMPLETE
function quarterFinalStageCheck() {
    if(!s1.classList.contains('empty-row') && !s2.classList.contains('empty-row') && !s3.classList.contains('empty-row') && !s4.classList.contains('empty-row')) {
        document.querySelector('.q-stage-check').style.display = 'flex'
    }
}

function semiFinalStageCheck() {
    if(!f1.classList.contains('empty-row') && !f2.classList.contains('empty-row')) {
        document.querySelector('.s-stage-check').style.display = 'flex'
    }
}

function finalStageCheck() {
    if(f1.classList.contains('selected-row') || f2.classList.contains('selected-row')) {
        document.querySelector('.f-stage-check').style.display = 'flex'
    }
}



// RESET FINAL TEAMS WHEN SEMI-FINAL TEAM IS CHANGED
function resetFinalTeams(gameBox, final, semi1, semi2) {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target

        if(target !== e.currentTarget) {
            if(!final.classList.contains('empty-row') && target.classList.contains(gameBox) && target.innerHTML !== final.innerHTML) {
                final.innerHTML = `
                <i class="fas fa-shield-alt team-logo shield"></i>
                `;
                final.classList.add('empty-row')
                semi1.classList.remove('selected-row')
                semi2.classList.remove('selected-row')
                semi1.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                semi1.firstElementChild.nextElementSibling.innerHTML = ``
                semi2.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                semi2.firstElementChild.nextElementSibling.innerHTML = ``
            }
        }
    })
}



// ADD SEMI-FINAL AND FINAL TEAMS TO DOM
function addSemiOne() {
    addSemiTeams('q-1', s1, semi_1, 'team-1', 'team-2')
}
function addSemiTwo() {
    addSemiTeams('q-2', s2, semi_2, 'team-3', 'team-4')
}
function addSemiThree() {
    addSemiTeams('q-3', s3, semi_3, 'team-5', 'team-6')
}
function addSemiFour() {
    addSemiTeams('q-4', s4, semi_4, 'team-7', 'team-8')
}
function addFinalOne() {
    addFinalTeams('s-one', f1, final_1, 's-team-1', 's-team-2')
}
function addFinalTwo() {
    addFinalTeams('s-two', f2, final_2, 's-team-3', 's-team-4')
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



// CREATE POPUP WHEN TOURNAMENT WINNER IS SELECTED
function createWinnerPopUp() {
    const popUpBtn = document.querySelector('.continue-btn')

    winnerPopUp.classList.add('show')

    popUpBtn.addEventListener('click', () => {
        UEFALogIn()
    })
}



// REMOVE POPUP WHEN NEW TEAMS ARE SELECTED
function removeWinnerPopUp() {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target

        if(!f1.classList.contains('empty-row') && !f2.classList.contains('empty-row')) {
            const firstFinalist = f1.firstElementChild.nextElementSibling.innerHTML
            const secondFinalist = f2.firstElementChild.nextElementSibling.innerHTML
            if(firstFinalist === '' && secondFinalist === '') {
                winnerPopUp.classList.remove('show')
            }
            if(target.classList.contains('quarter')) {
                winnerPopUp.classList.remove('show')
            }
        }
    })
}
removeWinnerPopUp();



// CREATE POPUP SCREEN OF MATCH PREVIEW
function createPopUp() {

    bracketContent.addEventListener('click', (e) => {
        const target = e.target
    
        if(target !== e.currentTarget) {
            if(target.classList.contains('view-details')) {

                const firstTeam = target.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling;
                const teamID_1 = firstTeam.getAttribute('data-teamID')
                
                const secondTeam = target.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling;
                const teamID_2 = secondTeam.getAttribute('data-teamID')


                fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=${teamID_1}-${teamID_2}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "576022dfeamsh7ad87ea6befc8bep1031c3jsnf1d4181025ac",
                        "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        const team_1 = data.response[0].teams.away;
                        const team_2 = data.response[0].teams.home;
                        const date_1 = data.response[0].fixture.date.substr(0,10);
                        const date_2 = data.response[1].fixture.date.substr(0,10);
                        const score_1 = data.response[0].goals.away;
                        const score_2 = data.response[0].goals.home;
                        const score_3 = data.response[1].goals.away;
                        const score_4 = data.response[1].goals.home;
                
                        const popUp = document.createElement('div')
                        popUp.classList.add('pop-up-overlay')
                        popUp.innerHTML =  `
                        <div class="pop-up">
                        <button class="pop-up-close">X</button>
                        <h3>You picked<br>
                        <span class="selected-team">${team_1.name}</span> to beat ${team_2.name}</h3>
                        <div class="match">
                            <img src="${team_1.logo}" class="team-logo fixture-logo">
                            <p>VS</p>
                            <img src="${team_2.logo}" class="team-logo fixture-logo">
                        </div>
                        <div class="recent-results">
                            <p>Recent fixtures</p>
                            <div class="fixture">
                                <div class="date">${date_1}</div>
                                <div class="recent-game">
                                    <div class="team">
                                        <img src="${team_1.logo}" class="team-logo">
                                        <p class="team-name">${team_1.name}</p> 
                                    </div>
                                    <p>${score_1} - ${score_2}</p>
                                    <div class="team">
                                        <img src="${team_2.logo}" class="team-logo">
                                        <p class="team-name">${team_2.name}</p> 
                                    </div>
                                    <i class="fas fa-angle-right"></i>
                                </div>
                            </div>
                            <div class="fixture">
                                <div class="date">${date_2}</div>
                                <div class="recent-game">
                                    <div class="team">
                                        <img src="${team_2.logo}" class="team-logo">
                                        <p class="team-name">${team_2.name}</p> 
                                    </div>
                                    <p>${score_3} - ${score_4}</p>
                                    <div class="team">
                                        <img src="${team_1.logo}" class="team-logo">
                                        <p class="team-name">${team_1.name}</p> 
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
        }
        e.stopPropagation();
    });
    }
    createPopUp();



    // POP-UP CLOSE BUTTON USING EVENT DELEGATION
    popUp.addEventListener('click', (e) => {
        if(e.target.classList.contains('pop-up-close')) {
            popUp.style.display = 'none'
        }
    })


    function test() {
        const dropdownMenu = document.querySelector('.dropdown-menu')
        const menu = document.querySelector('.menu')

        menu.addEventListener('click', () => {
            dropdownMenu.style.display = 'block'
        })

        dropdownMenu.style.displa7 = 'block' ? console.log('wheeze') : console.log(123)
    }

    test();