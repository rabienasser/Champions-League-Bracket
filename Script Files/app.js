const popUp = document.querySelector('.pop-up-container')
const popUpContainer = document.querySelector('.pop-up-container')
const bracketContent = document.querySelector('.bracket-content')
const winnerPopUp = document.querySelector('.bracket-complete')
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
const addSemiTeams = (quarter, semi, semiArray, topTeam, bottomTeam) => {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
        const parent = target.parentNode.parentNode
    
        if(target !== e.currentTarget) {
            
            const addStyle = () => {
                designSelectedTeams(quarter, semi, topTeam, bottomTeam, target, parent)
                semi.firstElementChild.nextElementSibling.innerHTML = ''
                semi.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                semi.classList.remove('empty-row')
                quarterFinalStageCheck()
            }

            if(target.classList.contains(quarter)) {
                semiArray.push(target)
                semi.innerHTML = target.innerHTML;
                addStyle();
            } else if(parent.classList.contains(quarter)) {
                semiArray.push(parent)
                semi.innerHTML = parent.innerHTML;
                addStyle()
            }

        }
    });

}



// ADD FINAL TEAMS
const addFinalTeams = (semi, final, finalArray, topTeam, bottomTeam) => {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
        const parent = target.parentNode.parentNode
    
        if(target !== e.currentTarget) {
            const addStyle = () => {
                designSelectedTeams(semi, final, topTeam, bottomTeam, target, parent)
                final.firstElementChild.nextElementSibling.innerHTML = ''
                final.firstElementChild.nextElementSibling.classList.remove('checked-circle')
                final.classList.remove('empty-row')
                semiFinalStageCheck()
            }
            
            if(target.classList.contains(semi) && !target.classList.contains('empty-row')) {
                finalArray.push(target)
                final.innerHTML = target.innerHTML;
                addStyle()
            } else if(parent.classList.contains(semi) && !parent.classList.contains('empty-row')) {
                finalArray.push(parent)
                final.innerHTML = parent.innerHTML;
                addStyle()
            }

            resetFinalTeams('q-1', final, s1, s2, s3, s4)
            resetFinalTeams('q-2', final, s1, s2, s3, s4)
            resetFinalTeams('q-3', final, s1, s2, s3, s4)
            resetFinalTeams('q-4', final, s1, s2, s3, s4)
        }
    });
}



// CHOOSE TOURNAMENT WINNER
const selectWinner = (final, topTeam, bottomTeam) => {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
        const parent = target.parentNode.parentNode
    
        if(target !== e.currentTarget) {
            if(target.classList.contains(final) && !target.classList.contains('empty-row')) {
                designSelectedTeams(undefined, undefined, topTeam, bottomTeam, target, parent)
                finalStageCheck();
                createWinnerPopUp();
            } else if(parent.classList.contains(final) && !parent.classList.contains('empty-row')) {
                designSelectedTeams(undefined, undefined, topTeam, bottomTeam, target, parent)
                finalStageCheck();
                createWinnerPopUp();
            }
        }
    });
}
selectWinner('final', 'f-1', 'f-2')



// ADD EFFECTS ON SELECTED TEAMS
const designSelectedTeams = (firstStage, secondStage, topTeam, bottomTeam, target, parent) => {

    const addTopTeam = function(element) {
        element.classList.add('selected-row')
        element.nextElementSibling.classList.remove('selected-row')

        // ADD CIRCLE CLASS
        element.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
        element.firstElementChild.nextElementSibling.classList.add('checked-circle')
        element.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
        element.nextElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')
    }

    const addBottomTeam = function(element) {
        element.classList.add('selected-row')
        element.previousElementSibling.classList.remove('selected-row')

        // ADD CIRCLE CLASS
        element.firstElementChild.nextElementSibling.innerHTML = `<i class="fas fa-check"></i>`
        element.firstElementChild.nextElementSibling.classList.add('checked-circle')
        element.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = ``
        element.previousElementSibling.firstElementChild.nextElementSibling.classList.remove('checked-circle')
    }

    // TOP TEAMS
    if(target.classList.contains(topTeam)) {
        addTopTeam(target)

    } else if(parent.classList.contains(topTeam)) {
       addTopTeam(parent)
    }
    
    // BOTTOM TEAMS
    else if(target.classList.contains(bottomTeam)) {
       addBottomTeam(target)
    } 
    else if(parent.classList.contains(bottomTeam)) {
        addBottomTeam(parent)
    } 
}



// ADD CHECKMARKS WHEN TOURNAMENT STAGES ARE COMPLETE
const quarterFinalStageCheck = () => {
    if(!s1.classList.contains('empty-row') && !s2.classList.contains('empty-row') && !s3.classList.contains('empty-row') && !s4.classList.contains('empty-row')) {
        document.querySelector('.q-stage-check').style.display = 'flex'
    }
}

const semiFinalStageCheck = () => {
    if(!f1.classList.contains('empty-row') && !f2.classList.contains('empty-row')) {
        document.querySelector('.s-stage-check').style.display = 'flex'
    } else {
        document.querySelector('.s-stage-check').style.display = 'none'
    }
}

const finalStageCheck = () => {
    if(f1.classList.contains('selected-row') || f2.classList.contains('selected-row')) {
        document.querySelector('.f-stage-check').style.display = 'flex'
    }
}



// RESET FINAL TEAMS WHEN SEMI-FINAL TEAM IS CHANGED
const resetFinalTeams = (gameBox, final, semi1, semi2, semi3, semi4) => {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
        const parent = target.parentNode.parentNode

        function reset(top, bottom) {
            final.innerHTML = `
            <i class="fas fa-shield-alt team-logo shield"></i>
            `;
            final.classList.add('empty-row')
            
            top.classList.remove('selected-row')
            bottom.classList.remove('selected-row')
            top.firstElementChild.nextElementSibling.classList.remove('checked-circle')
            top.firstElementChild.nextElementSibling.innerHTML = ``
            bottom.firstElementChild.nextElementSibling.classList.remove('checked-circle')
            bottom.firstElementChild.nextElementSibling.innerHTML = ``
            }

        if(target !== e.currentTarget) {
            if(!final.classList.contains('empty-row') && target.classList.contains(gameBox) && target.innerHTML !== final.innerHTML) {
                reset(semi1, semi2)
                reset(semi3, semi4)
            } 
            else if(!final.classList.contains('empty-row') && parent.classList.contains(gameBox) && parent.innerHTML !== final.innerHTML) {
                reset(semi1, semi2)
                reset(semi3, semi4)
            }
        }
    })
}



// ADD SEMI-FINAL AND FINAL TEAMS TO DOM
const addSemiOne = () => {
    addSemiTeams('q-1', s1, semi_1, 'team-1', 'team-2')
}
const addSemiTwo = () => {
    addSemiTeams('q-2', s2, semi_2, 'team-3', 'team-4')
}
const addSemiThree = () => {
    addSemiTeams('q-3', s3, semi_3, 'team-5', 'team-6')
}
const addSemiFour = () => {
    addSemiTeams('q-4', s4, semi_4, 'team-7', 'team-8')
}
const addFinalOne = () => {
    addFinalTeams('s-one', f1, final_1, 's-team-1', 's-team-2')
}
const addFinalTwo = () => {
    addFinalTeams('s-two', f2, final_2, 's-team-3', 's-team-4')
}



// CALL SEMI FINAL AND FINAL FUNCTIONS
const semiCall = () => {
    addSemiOne();
    addSemiTwo();
    addSemiThree();
    addSemiFour();
}
semiCall();


const finalCall = () => {
    addFinalOne();
    addFinalTwo();
}
finalCall();



// CREATE POPUP WHEN TOURNAMENT WINNER IS SELECTED
const createWinnerPopUp = () => {
    const popUpBtn = document.querySelector('.continue-btn')

    winnerPopUp.classList.add('show')

    popUpBtn.addEventListener('click', () => {
        UEFALogIn()
    })
}



// REMOVE POPUP WHEN NEW TEAMS ARE SELECTED
const removeWinnerPopUp = () => {
    bracketContent.addEventListener('click', (e) => {
        const target = e.target
        const parent = target.parentNode.parentNode

        function remove(element) {
            const firstFinalist = f1.firstElementChild.nextElementSibling.innerHTML
            const secondFinalist = f2.firstElementChild.nextElementSibling.innerHTML
            if(firstFinalist === '' && secondFinalist === '') {
                winnerPopUp.classList.remove('show')
            }
            if(element.classList.contains('quarter')) {
                winnerPopUp.classList.remove('show')
            }
        }

        if(!f1.classList.contains('empty-row') && !f2.classList.contains('empty-row')) {
           remove(target)
           remove(parent)
        }
    })
}
removeWinnerPopUp();



// CREATE POPUP SCREEN OF MATCH PREVIEW
const createPopUp = () => {

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

